<?php
include 'connection.php';
$features = [];

$sql = "SELECT * FROM feature";
$result=$db->query($sql);
while($row = $result->fetch_object()){
	$features[]= $row;
}
	echo json_encode($features);