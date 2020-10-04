<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BookController extends Controller
{
    public function getBooks() {
      $books = Bool::all();
      return response()->json($books, 200);
    }
}
