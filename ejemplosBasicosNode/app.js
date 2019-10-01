const express = require('express');
const bodyParser= require('body-parser');
const app = express();

app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({extended: false}));
//esto es mocking de datos
const places = [
 {
     'title':'CodigoFacilito',
     'description':'ACA LA DESCRIPCION',
     'address':'Maipu 479'
 },
 {
    'title':'CodigoFacilito',
    'description':'ACA LA DESCRIPCION',
    'address':'Maipu 479'
},
{
    'title':'CodigoFacilito',
    'description':'ACA LA DESCRIPCION',
    'address':'Maipu 479'
}
];

app.get('/', (req,res)=>{
  res.json(places);
});
app.post('/', (req,res)=>{
     res.json(req.body.nombre);
  });
  
//esto es para decirle donde estan los archivos estaticos
app.use(express.static('public'));
app.listen(3000,function(){
    console.log('El puerto 3000 esta listo');
})