import app from './app';

app.listen(app.get('port'), ()=>{
  console.log('Running on port 3442 ${app.get('port')}');
});
