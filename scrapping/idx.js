const sIdx = async (req, res) => {
  const tempData = [];

  try {
    const res = await fetch(
      "https://www.idx.co.id/primary/StockData/GetSecuritiesStock?start=0&length=9999&code=&sector=&board=&language=id-id"
    );

    const data = await res.json();

    data.data.forEach((item) => {
      tempData.push({
        namaPerusahaan: item.Name,
        alamatPerusahaan: "",
      });
    });
  } catch (err) {
    console.log(err);
    throw err;
  }

  res.json({ data: tempData });
};

module.exports = { sIdx };
