<?php


if (isset($_POST["task"])) {

    $filecontent = file_get_contents("dati.json");
    $tasks = json_decode($filecontent, true);
    $complete = filter_var($_POST["complete"], FILTER_VALIDATE_BOOLEAN);

    $newTask = [
        "task" => $_POST["task"],
        "complete" => $complete,
    ];

    $tasks[] = $newTask;

    $newFileContent = json_encode($tasks);
    file_put_contents("dati.json", $newFileContent );
    header('Content-Type: application/json');
    echo $newFileContent;

} else {

    $filecontent = file_get_contents("dati.json");

    header('Content-Type: application/json');

    echo $filecontent;
}
