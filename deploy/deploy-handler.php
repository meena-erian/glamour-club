<?php
/**
 * @package Deploy handler
 * 
 * Configurations:
 * @var deployTo Absolute path to the deploy folder.
 * @var sercretKey Hash signature key.
 */

$deployTo = __DIR__ . "\deploy";
$sercretKey = "******************";


function clear_dir($dir){
    $it = new RecursiveDirectoryIterator($dir, RecursiveDirectoryIterator::SKIP_DOTS);
    $files = new RecursiveIteratorIterator($it, RecursiveIteratorIterator::CHILD_FIRST);
    foreach($files as $file) {
        if ($file->isDir()){
            rmdir($file->getRealPath());
        } else {
            unlink($file->getRealPath());
        }
    }
}

if(!isset($_POST['signature']))die("Signature not set!");
if(!isset($_FILES['build'])) die("Build file not set");
$hash = hash_hmac("sha1",file_get_contents($_FILES['build']['tmp_name']) , $sercretKey);
if($hash !== $_POST['signature']) die('Signature failed! sig:'.$_POST['signature'].' hash:'.$hash);
$zip = new ZipArchive();
$ret = $zip->open($_FILES['build']['tmp_name']);//__DIR__ . "/tempbuild.zip");
if($ret !== true) {
    echo "Failed to open archive: ";
    switch($ret){
        case ZipArchive::ER_EXISTS:
            die("File already exists.");
        case ZipArchive::ER_INCONS:
            die("Zip archive inconsistent.");
        case ZipArchive::ER_INVAL:
            die("Invalid argument.");
        case ZipArchive::ER_MEMORY:
            die("Malloc failure.");
        case ZipArchive::ER_NOENT:
            die("No such file.");
        case ZipArchive::ER_NOZIP:
            die("Not a zip archive.");
        case ZipArchive::ER_OPEN:
            die("Can't open file.");
        case ZipArchive::ER_READ:
            die("Read error.");
        case ZipArchive::ER_SEEK:
            die("Seek error.");
        default:
            echo ("Unknown Error!:");
            var_dump($ret);
            die();
    }
}
echo "\nZip archive opened successfully\n";
clear_dir($deployTo);
echo $zip->extractTo($deployTo);
$zip->close();

    