const fs = require("fs");
const path = require("path");
const folderName = "test";
const fileName = "test.txt";
const filePath = path.join(__dirname, folderName, fileName);
//criar uma pasta
// fs.mkdir(path.join(__dirname, 'test'), {}, (err) => {
//     if (err) throw err;
//     console.log('Pasta criada com sucesso!');
// });

//criar um arquivo
fs.writeFile(filePath, "Hello World!", (err) => {
  if (err) throw err;
  console.log("Arquivo criado com sucesso!");

  //adicionar conteúdo ao arquivo
  fs.appendFile(filePath, "\nAdicionando mais conteúdo!", (err) => {
    if (err) throw err;
    console.log("Conteúdo adicionado com sucesso!");
  });
  //renomear o arquivo
  fs.rename(
    filePath,
    path.join(__dirname, folderName, "renamed.txt"),
    (err) => {
      if (err) throw err;
      console.log("Arquivo renomeado com sucesso!");
    }
  );
  //ler o arquivo
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) throw err;
    console.log("Conteúdo do arquivo:", data);
  });
});
