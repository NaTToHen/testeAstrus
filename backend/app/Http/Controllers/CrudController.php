<?php

namespace App\Http\Controllers;

use App\Models\Produto;
use App\Models\Fornecedora;
use Illuminate\Http\Request;

class CrudController extends Controller
{
    function read()
    {
        $dados = Produto::from('info_produtos')->get();
        return response()->json($dados, 200, [], JSON_UNESCAPED_UNICODE);
    }

    function create(Request $request)
    {
        $product = new Produto;
        $product->nome = $request->nome;
        $product->descricao = $request->descricao;
        $product->fk_fornecedora = $request->fornecedora;
        $product->valor = $request->valor;
        $product->save();

        if ($product->save()) {
            return response()->json("Produto cadastrado com sucesso");
        } else {
            return response()->json("Erro ao cadastrar produto");
        }
    }

    function delete($id) {
        $product = Produto::find($id);
        $product->delete();
        return response()->json("sucesso");
    }

    function fornecedoras()
    {
        $dados = Fornecedora::all();
        return response()->json($dados, 200, [], JSON_UNESCAPED_UNICODE);
    }

    function produto($id)
    {
        $produto = Produto::find($id);
        return response()->json($produto, 200, [], JSON_UNESCAPED_UNICODE);
    }
}