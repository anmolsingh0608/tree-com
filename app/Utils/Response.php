<?php

namespace App\Utils;

class Response
{
    public function createResponse(string $message, mixed $data)
    {
        return response([
            'success' => true,
            'message' => $message,
            'data' => $data,
        ], 200);
    }

    public function createErrorResponse(string $errorMessage, int $responseCode = 500) {
        return response([
            'success' => false,
            'message' => $errorMessage,
            'data' => null
        ], $responseCode);
    }
}
