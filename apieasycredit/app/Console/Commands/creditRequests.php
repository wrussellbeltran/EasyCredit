<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use App\Requests;

class creditRequests extends Command
{
    /**
     * El nombre y la firma del comando de la consola.
     * @var string
     */
    protected $signature = 'credit:requests';

    /**
     * La descripción del comando de la consola
     * @var string
     */
    protected $description = 'Ejecuta la solicitud de crédito';

    /**
     * Crear una nueva instancia de comando.
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Ejecuta el comando de la consola que contiene la tarea programada con las validaciones de la solicitud
     * y se genero log para verificar que se ejecuto solicitud.
     * @return mixed
     */
    public function handle()
    {
        Requests::where('age', '<', 20)->orWhere('card', '=', false)->update(['status' => 0]);
        Requests::where([['age', '>=', 20],['card', '=', true],])->update(['status' => 2]);
        Log::info("Solicitud ejecutada!");
    }
}
