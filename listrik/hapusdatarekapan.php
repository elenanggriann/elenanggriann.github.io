<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
<style type="text/css">
 body {
	background-image: url(Savin-NY-Website-Background-Web.jpg);
	padding-left: 64px;
	padding-right: 64px;}
</style>
</head>

<body>
<h4>Hapus rencana penggunaan barang berdasarkan Ruangan, ID barang, dan tanggal rekapan</h4>
	<form action="proseshapusrekapan.php" method="post">
        Ruangan: <input type="text" name="ruangan"><br /><br />
        ID Barang: <input type="text" name="IDbarang"><br /><br />
        Tanggal: <input type="text" name="tanggal" id="tanggal"><br />
        *input tanggal dengan format YYYY-MM-DD<br /><br />
		<input type="submit" value="Hapus">
	</form>

</body>
</html>