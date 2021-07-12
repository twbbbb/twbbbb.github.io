console.log(2)
//let url='https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=3Cm3bHxG1I3ROE2N94Y8vw7347XEAaQk&page=0&q=cats&fq=document_type:(%22article%22)&begin_date=20170301&end_date=20170312%27';
//let url='https://www.google.com';
let url='https://xml.alexa.com/data?cli=10&dat=nsa&url=github.com';
fetch(url).then(function (response) {
    response.text().then(function (text) {
        console.log(text);
    });
});
