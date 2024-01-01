<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Untitled Document</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      overflow: hidden;
    }

    header {
      height: 165px;
    }

    nav {
      width: 262px;
      float: left;
    }

    section {
      width: calc(100% - 262px);
      float: left;
    }

    iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
  </style>
</head>
<body>
  <header>
    <h1 align="center">Hapus Rencana Penggunaan Harian Ruangan</h1>
  </header>
  <nav>
    <h4>Tampil rekapan berdasarkan nama ruangan dan tanggal rekapan</h4>
      <form action="daftareditrekapan.php" method="post">
    	Ruangan: <input type="text" name="ruangan"><br /><br />
      Tanggal: <input type="text" name="Rtanggal" id="Rtanggal"><br />
      *input tanggal dengan format YYYY-MM-DD<br /><br />
        <input type="submit" value="Cari">
      </form>
<br/>
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
  </nav>
  <section>
  <h4>Hapus rencana penggunaan barang berdasarkan Ruangan, ID barang, dan tanggal rekapan</h4>
	<form action="proseshapusrekapan.php" method="post">
        Ruangan: <input type="text" name="ruangan"><br /><br />
        ID Barang: <input type="text" name="IDbarang"><br /><br />
        Tanggal: <input type="text" name="tanggal" id="tanggal"><br />
        *input tanggal dengan format YYYY-MM-DD<br /><br />
		<input type="submit" value="Hapus">
	</form>
  </section>
</body>
</html>
