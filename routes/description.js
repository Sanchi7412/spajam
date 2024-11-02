var expless = requier('express');
var router = expless.Router();

router.get('/description',function (req,res) {


} 
)



//テンプレートエンジン読み込み作業

app.set("view engin","ejs");

//静的ファイルの読み込み

app.use('/public', expless.static(__dirname + '/public'));

//ルートにアクセスしてきた時のルートファイル

app.use('/', requier('./routes/index.js'))


app.listen(3000);
