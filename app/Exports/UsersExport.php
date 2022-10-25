<?php

namespace App\Exports;

use App\Models\Customer;
use App\Models\Order;
use Illuminate\Support\Facades\DB;
use App\Models\Tree;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\FromCollection;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use Maatwebsite\Excel\Concerns\WithStyles;

class UsersExport implements FromCollection, WithHeadings, WithStyles
{
    private $isExportPending = false;
    function __construct($isExportPending)
    {
        $this->isExportPending = $isExportPending;
    }
    public function styles(Worksheet $sheet)
    {
        return [
            // Style the first row as bold text.
            1    => ['font' => ['bold' => true]],
        ];
    }
    public function headings(): array
    {
        return [
            'Customer Name',
            'City',
            'Tree Name',
            'Quantity'
        ];
    }
    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        $orders = [];
        if (!$this->isExportPending) {
            $orders = Order::select("orders.quantity", "trees.name AS tree", "customers.name", "customers.city")
                ->join('trees', 'trees.id', '=', 'orders.tree')
                ->join('customers', 'customers.id', '=', 'orders.customer')->get();
        }
        if ($this->isExportPending) {
            $orders = Order::select("orders.id","orders.quantity", "trees.name AS tree", "customers.name", "customers.city")
                ->join('trees', 'trees.id', '=', 'orders.tree')
                ->join('customers', 'customers.id', '=', 'orders.customer')
                ->where('isSentToNursery', 0)
                ->get();
        }
        $ordersFromDB = clone $orders;
        $orders->transform(function ($order) {
            return [
                'name' => $order->name,
                'city' => $order->city,
                'tree' => $order->tree,
                'quantity' => $order->quantity
            ];
        });
        if (!$this->isExportPending) {
            return $orders;
        }
        // query to reset isSentToNursery
        foreach($ordersFromDB as $order){
            $orderUpdate = Order::where('id', $order->id)->update([
                'isSentToNursery' => true
            ]);
        }

        return $orders;
    }
}
