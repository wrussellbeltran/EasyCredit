<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Helpers\JwtAuth;
use App\Requests;
use App\User;

class RequestController extends Controller
{
    /**
     * Guarda una solicitud.
     * @param Request  $request Contiene los datos de la solicitud a ingresar 
     * @return response Contiene el array con la solicitud o si obtuvo un error
     */
    public function store(Request $request)
    {
        $hash = $request->header('Authorization', null);

        $jwtAuth = new JwtAuth();
        $checkToken = $jwtAuth->checkToken($hash);

        if($checkToken) {
            $json = $request->input('json', null);
            $params = json_decode($json);
            $params_array = json_decode($json, true);

            $validate = \Validator::make($params_array, [
                'user_id' => 'required',
                'quantity' => 'required',
                'dead_line' => 'required',
                'age' => 'required',
                'total' => 'required'
            ]);

            if ($validate->fails()) {
                return response()->json($validate->errors(), 400);
            }

            $requests = new Requests();
            $requests->user_id = $params->user_id;
            $requests->quantity = $params->quantity;
            $requests->dead_line = $params->dead_line;
            $requests->card = $params->card;
            $requests->age = $params->age;
            $requests->total = $params->total;
            $requests->status = 1;
            $requests->save();

            $data = array(
                'requests' => $requests,
                'status' => 'success',
                'code' => 200
            );

        } else {
            $data = array(
                'message' => 'Solicitud incorrecta',
                'status' => 'error',
                'code' => 400
            );
        }

        return response()->json($data, 200);
    }

    /**
     * Muestra una lista de solicitudes de un usuario especifico.
     * @param  int  $id Id del usuario
     * @return response Contiene el array con las solicitudes que tiene el usuario o si obtuvo un error
     */
    public function show($id)
    {
        $user = User::find($id);   

        if (is_object($user)) {
            $requests = Requests::where("user_id", "=", $id)->get();
            return response()->json(array(
                'requests' => $requests,
                'status' => 'success',
            ), 200);
        } else {
            return response()->json(array(
                'message' => 'Solicitud no existe',
                'status' => 'error'
            ), 200);
        }
    }
}
