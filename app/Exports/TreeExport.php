<?php

namespace App\Exports;

use App\Models\Tree;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\FromCollection;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use Maatwebsite\Excel\Concerns\WithStyles;

class TreeExport implements FromCollection,WithHeadings,WithStyles
{
    /**
    * @return \Illuminate\Support\Collection
    */
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
            'id ', 'name','scientificName','use','form','flowerColor','fruit',
            'flowerTime','fallColor','tolerates','size','growthRate','nativeRegion',
            'notes','created_at','updated_at'

        ];
    }
    public function collection()
    {
        return Tree::all();
    }
}
