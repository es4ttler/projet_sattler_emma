<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;
use Tuupola\Middleware\HttpBasicAuthentication;
use \Firebase\JWT\JWT;

require __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/../bootstrap.php';
require_once __DIR__ . '/../model/Client.php';
require_once __DIR__ . '/../model/Fruit.php';

$app = AppFactory::create();
$app->addErrorMiddleware(true, true, true);

/*
=================================================JWT=================================================
*/

const JWT_SECRET = "TP-CNAM";

function  addHeaders (Response $response) : Response {
    $response = $response
    ->withHeader("Content-Type", "application/json")
    ->withHeader('Access-Control-Allow-Origin', ('*'))
    ->withHeader('Access-Control-Allow-Headers', 'Content-Type,  Authorization')
    ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS')
    ->withHeader('Access-Control-Expose-Headers', 'Authorization');

    return $response;
}

$options = [
    "attribute" => "token",
    "header" => "Authorization",
    "regexp" => "/Bearer\s+(.*)$/i",
    "secure" => false,
    "algorithm" => ["HS256"],
    "secret" => JWT_SECRET,
    "path" => ["/api"],
    "ignore" => ["/api/hello","/api/fruits","/api/login","/api/client/add","/api/clients"],
    "error" => function ($response, $arguments) {
        $data = array('ERREUR' => 'Connexion', 'ERREUR' => 'JWT Non valide');
        $response = $response->withStatus(401);
        return $response->withHeader("Content-Type", "application/json")->getBody()->write(json_encode($data));
    }
]; 

function getJWTToken($request)
{
    $payload = str_replace("Bearer ", "", $request->getHeader('Authorization')[0]);
    $token = JWT::decode($payload,JWT_SECRET , array("HS256"));
    return $token; 
}

function createJwT (Response $response,$login, $password) : Response {

    $issuedAt = time();
    $expirationTime = $issuedAt + 60;
    
    $payload = array(
    'login' => $login,
    'password' => $password,
    'iat' => $issuedAt,
    'exp' => $expirationTime
    );

    $token_jwt = JWT::encode($payload,JWT_SECRET, "HS256");
    $response = $response->withHeader("Authorization", "Bearer {$token_jwt}");

    return $response;
}




/*
=================================================HELLO=================================================
*/
$app->get('/api/hello/{name}', function (Request $request, Response $response, $args) {
    $array = [];
    $array ["nom"] = $args ['name'];
    $response->getBody()->write(json_encode ($array));
    return $response;
});



/*
=================================================CLIENT=================================================
*/

$userRepository =$entityManager->getRepository('Client');

// GET - GET ALL CLIENTS
$app->get('/api/clients', function (Request $request, Response $response, $args) {
    global $entityManager;

    $users=$entityManager->getRepository('Client')->findAll();

    $response = addHeaders($response);
    $response->getBody()->write(json_encode ($users));

    return $response;
});

// GET - GET CLIENT BY ID
$app->get('/api/client/{login}', function (Request $request, Response $response, $args) {
    global $entityManager;
    $login = $args ['login'];

    $user = $entityManager->getRepository('Client')->findOneBy(array('login' => $login));
    
    $response = addHeaders($response);
    $response->getBody()->write(json_encode ($user));
    return $response;
});

// POST - CREATE CLIENT
$app->post('/api/client/add', function (Request $request, Response $response, $args) {
    $inputJSON = file_get_contents('php://input');
    $body = json_decode( $inputJSON, TRUE ); //convert JSON into array
    $id=$body['id'] ?? "";
    $civility=$body['civility'] ?? "";
    $firstName = $body ['firstName'] ?? "";
    $name = $body ['name'] ?? ""; 
    $tel = $body ['tel'] ?? "";
    $email = $body ['email'] ?? "";
    $address = $body ['address'] ?? "";
    $city = $body ['city'] ?? "";
    $cp = $body ['cp'] ?? "";
    $country = $body ['country'] ?? "";
    $login = $body ['login'] ?? "";
    $password = $body ['password'] ?? "";
    $err=false;

    //check format name, email and password
    if (empty($name) || empty($firstName) || empty($email) || empty($phone) || empty($address) || empty($city) || empty($codeCity) || empty($country) || empty($login) || empty($password) || empty($civility) || 
        !preg_match("/^[a-zA-Z0-9]+$/", $name) || !preg_match("/^[a-zA-Z0-9]+$/", $firstName) ||  
        !preg_match("/^[a-zA-Z0-9]+$/", $city) || 
        !preg_match("/^[0-9]+$/", $cp) || !preg_match("/^[a-zA-Z0-9]+$/", $country) || !preg_match("/^[a-zA-Z0-9]+$/", $civility)) {
        $err=true;
    }

    if (!$err) {
        global $entityManager;
    
        $user = $entityManager->getRepository('Client');
        $user->persist($body);

        $response = addHeaders($response);
       $response->getBody()->write(json_encode ($body));
    }
    else{          
        $response = $response->withStatus(401);
    }
    return $response;
});

//PUT - UPDATE CLIENT
$app->put('/api/client/{id}', function (Request $request, Response $response, $args) {
    $civility=$body['civility'] ?? "";
    $firstName = $body ['firstName'] ?? "";
    $name = $body ['name'] ?? ""; 
    $tel = $body ['tel'] ?? "";
    $email = $body ['email'] ?? "";
    $address = $body ['address'] ?? "";
    $city = $body ['city'] ?? "";
    $cp = $body ['cp'] ?? "";
    $country = $body ['country'] ?? "";
    $login = $body ['login'] ?? "";
    $password = $body ['password'] ?? "";
    $err=false;

    //check format name, email and password
    if (empty($name) || empty($firstName) || empty($email) || empty($tel) || empty($address) || empty($city) || empty($cp) || empty($country) || empty($login) || empty($password) || empty($civility) || 
        !preg_match("/^[a-zA-Z0-9]+$/", $name) || !preg_match("/^[a-zA-Z0-9]+$/", $firstName) ||  
        !preg_match("/^[a-zA-Z0-9]+$/", $city) || 
        !preg_match("/^[0-9]+$/", $cp) || !preg_match("/^[a-zA-Z0-9]+$/", $country) || !preg_match("/^[a-zA-Z0-9]+$/", $civility)) {
        $err=true;
    }
    $id = $args ['id'];
    global $entityManager;
    
    $user = $entityManager->find('Client', $id);

    if (!$err && $user!=null) {
        
        $user->setName($name);
        $user->setFirstName($firstName);
        $user->setCp($cp);
        $user->setTel($tel);
        $user->setEmail($email);
        $user->setCivility($civility);
        $user->setLogin($login);
        $user->setPassword($password);

        $entityManager->persist($user);
        $entityManager->flush();
        
        $response = addHeaders($response);
        $response->getBody()->write(json_encode ($user));
    }
    else{          
        $response = $response->withStatus(401);
    }
    return $response;
});

//DELETE - DELETE CLIENT
$app->delete('/api/client/{id}', function (Request $request, Response $response, $args) {
    $err=false;
    global $entityManager;
    $id = $args ['id'];

    $user = $entityManager->find('User', $id);
    if ($user == null) {
        echo "User $id does not exist.\n";
        $response = $response->withStatus(401);
    }
    else{
        $entityManager->remove($user);
        $entityManager->flush();

        $response = addHeaders($response);
        $response->getBody()->write(json_encode ($user));
    }
    unset($array[$id]);
    
    return $response;
});

// POST - LOGIN
$app->post('/api/login', function (Request $request, Response $response, $args) {  
    $err=false; 
    global $entityManager;
    $inputJSON = file_get_contents('php://input');
    $body = json_decode( $inputJSON, TRUE ); //convert JSON into array 
    $login = $body['login'] ?? ""; 
    $password = $body['password'] ?? "";

    if (!preg_match("/[a-zA-Z0-9]{1,20}/",$login)|| !preg_match("/[a-zA-Z0-9]{1,20}/",$password))  {
        $err=true;
    }
    var_dump($login, $password);

    $user = $entityManager->getRepository('Client');
    var_dump($user);
    $user = $user->findOneBy(array('login' => $login, 'password' => $password));
    var_dump($user);


    if (!$err && !empty($user)) {
            $response = createJwT ($response,$login,$password);
            $data = array('login' => $login);
            $response = addHeaders($response);
            $response->getBody()->write(json_encode($data));
     } else {          
            $response = $response->withStatus(401);
     }
    return $response;
});


/*
=================================================CATALOG=================================================
*/

//GET - GET ALL FRUITS
$app->get('/api/fruits', function (Request $request, Response $response, $args) {
    global $entityManager;	
    $fruits = $entityManager->getRepository('Fruit')->findAll();
    // $json = file_get_contents("../assets/mock/catalog.json");
    // $array = json_decode($json, true);
    $response = addHeaders($response);
    $response->getBody()->write(json_encode($fruits));
    return $response;
});

//GET - GET FRUIT BY ID
$app->get('/api/fruit/{id}', function (Request $request, Response $response, $args) {
    $json = file_get_contents("../assets/mock/catalog.json");
    $array = json_decode($json, true);
    $id = $args ['id'];
    $array = $array[$id];
    $response = addHeaders($response);
    $response->getBody()->write(json_encode ($array));
    return $response;
});

//POST - ADD FRUIT
$app->post('/api/fruit/add', function (Request $request, Response $response, $args) {
    $inputJSON = file_get_contents('php://input');
    $body = json_decode( $inputJSON, TRUE ); //convert JSON into array 
    $name = $body ['name'] ?? ""; 
    $price = $body ['price'] ?? "";
    $color = $body ['color'] ?? "";
    $err=false;

    //check format name, price, color and image
    if (empty($name) || empty($price) || empty($color) ||
    !preg_match("/^[a-zA-Z]+$/", $name) || !preg_match("/^[0-9]+$/", $price) || !preg_match("/^[a-zA-Z0-9]+$/", $color)) {
        $err=true;
    }

    if (!$err) {
        $json = file_get_contents("../assets/mock/catalog.json");
        $array = json_decode($json, true);
        $id = count($array);
        $array[] = array('id' => $id, 'name' => $name, 'price' => $price, 'color' => $color);
        $json = json_encode($array);
        file_put_contents("../assets/mock/catalog.json", $json);
        $response = addHeaders($response);
        $response->getBody()->write($json);
    }
    else{          
        $response = $response->withStatus(401);
    }
    return $response;
});

//UPDATE - UPDATE FRUIT
$app->put('/api/fruit/update/{id}', function (Request $request, Response $response, $args) {
    $inputJSON = file_get_contents('php://input');
    $body = json_decode( $inputJSON, TRUE ); //convert JSON into array 
    $name = $body ['name'] ?? ""; 
    $price = $body ['price'] ?? "";
    $color = $body ['color'] ?? "";
    $err=false;

    //check format name, price, color and image
    if (empty($name) || empty($price) || empty($color) ||
    !preg_match("/^[a-zA-Z]+$/", $name) || !preg_match("/^[0-9]+$/", $price) || !preg_match("/^[a-zA-Z0-9]+$/", $color)) {
        $err=true;
    }

    if (!$err) {
        $json = file_get_contents("../assets/mock/catalog.json");
        $array = json_decode($json, true);
        $id = $args ['id'];
        $array[$id] = array('id' => $id, 'name' => $name, 'price' => $price, 'color' => $color);
        $json = json_encode($array);
        file_put_contents("../assets/mock/catalog.json", $json);
        $response = addHeaders($response);
        $response->getBody()->write($json);
    }
    else{          
        $response = $response->withStatus(401);
    }
    return $response;
});

//DELETE - DELETE FRUIT
$app->delete('/api/fruit/delete/{id}', function (Request $request, Response $response, $args) {
    $json = file_get_contents("../assets/mock/catalog.json");
    $array = json_decode($json, true);
    $id = $args ['id'];
    unset($array[$id]);
    $json = json_encode($array);
    file_put_contents("../assets/mock/catalog.json", $json);
    $response->getBody()->write($json);
    $response = addHeaders($response);
    return $response;
});




$app->add(new Tuupola\Middleware\JwtAuthentication($options));
$app->run ();