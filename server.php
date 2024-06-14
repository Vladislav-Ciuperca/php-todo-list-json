<?php

$students = [
    [
        'task' => "Tosare l'erba",
        'completed' => true
    ],
    [
        'task' => 'Mangiare biscotti',
        'completed' => false
    ],
    [
        'task' => 'Votare Vermin Supreme',
        'completed' => true
    ],
    [
        'task' => 'Carpare il Diem',
        'completed' => false
    ],
    [
        'task' => 'Essere pazzo, pazzo per Gesu',
        'completed' => null
    ],
];

header('Content-Type: application/json');

 echo json_encode($students);