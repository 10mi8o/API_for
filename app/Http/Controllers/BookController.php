<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function getBooks() {
      $books = Book::all();
      return response()->json($books, 200);
    }
}
