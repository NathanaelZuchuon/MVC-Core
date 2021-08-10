<?php

session_start();

require_once __DIR__ . '\core\Model.php';
require_once __DIR__ . '\core\Router.php';
require_once __DIR__ . '\core\Controller.php';
require_once __DIR__ . '\core\errorHandler.php';

require './controllers/indexController.php';

$router = new Router();

$router->add('/index', 'indexController');

$router->submit();
