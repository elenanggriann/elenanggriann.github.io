<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
<style>
        table {
            border-collapse: collapse;
            width: 75%;
        }
        table, th, td {
            border: 2px solid black;
        }
        th {
            font-size: 16px;
			padding: 8px;
            text-align: center;
			background-color: #CCCCCC;

        }
		td {
			font-size: 16px;
            padding: 8px;
            text-align: left;
        }
 		body {
			background-image: url(Savin-NY-Website-Background-Web.jpg);
		}
</style>
    </style>
</head>

<body>
<h4>Tampil rekapan berdasarkan nama ruangan dan tanggal rekapan</h4>
<form action="daftareditrekapan.php" method="post">
    	Ruangan: <input type="text" name="ruangan"><br /><br />
        Tanggal: <input type="text" name="Rtanggal" id="Rtanggal"><br />
        *input tanggal dengan format YYYY-MM-DD<br /><br />
        <input type="submit" value="Cari">
      </form>
<br />
<?php
$conn = new mysqli("localhost", "root", "", "dataklmpk6");
	
	if ($conn->connect_error){
		die("koneksi gagal: " .$conn->connect_error);	
	}
	
	$sql = "SELECT DISTINCT ruangan FROM data_inventaris";
	$result = $conn->query($sql);
	?>
    <p>Daftar Nama Ruangan Gedung B24</p>
	<table border="2px" bordercolor="#000000">
    <thead>
        <tr>
            <th><b>Daftar Nama Ruangan</b></th>
        </tr>
    </thead>
    <tbody>
        <?php
       	if ($result->num_rows>0){
		//output data dari setiap baris
		echo"<ul>";
		while($row=$result->fetch_assoc())
		{
		 echo "<tr>";
			echo "<td>" . $row["ruangan"] . "</td>";
            // menambah kolom lain
            echo "</tr>";
		}
		echo "</ul>";
	}else{
		echo"Tidak ada ruangan yang terdaftar.";
	}
        ?>
    </tbody>
</table>
<?php
	$conn->close();
	?>
</body>
</html>