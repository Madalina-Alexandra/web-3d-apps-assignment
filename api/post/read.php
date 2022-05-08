<?php 

  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');

  // Get JSON files
  $cokeJson = file_get_contents('../gltfs/coke.json');
  $costaJson = file_get_contents('../gltfs/costa.json');
  $glaceauJson = file_get_contents('../gltfs/glaceau.json');


  // Post array
  $posts = array();

  // Post one
  $postOne = array(
    'id' => 1,
    'name' => 'coke',
    'gltf' =>  json_decode($cokeJson),
  );

  // Post two
  $postTwo = array(
    'id' => 2,
    'name' => 'costa',
    'gltf' =>  json_decode($costaJson),
  );

  // Post three
  $postThree = array(
    'id' => 3,
    'name' => 'glaceau',
    'gltf' =>  json_decode($glaceauJson),
  );

  // Push to posts array
  array_push($posts, $postOne);
  array_push($posts, $postTwo);
  array_push($posts, $postThree);
  

  // Turn to JSON & output
  echo json_encode($posts);

