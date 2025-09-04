---
layout: none
---

var idx = lunr(function () {
  this.field('title')
  this.field('excerpt')
  this.field('content')
  this.ref('id')
  
  this.pipeline.remove(lunr.trimmer)
  
  for (var item in store) {
    this.add({
      title: store[item].title,
      excerpt: store[item].excerpt,
      content: store[item].content,
      id: item
    })
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search');
  const resultDiv = document.getElementById('results');
  
  if (!searchInput || !resultDiv) return;
  
  searchInput.addEventListener('keyup', function () {
    const query = this.value.toLowerCase();
    const result = idx.query(function (q) {
      query.split(lunr.tokenizer.separator).forEach(function (term) {
        q.term(term, { boost: 100 })
        if(query.lastIndexOf(" ") != query.length-1){
          q.term(term, {  usePipeline: false, wildcard: lunr.Query.wildcard.TRAILING, boost: 10 })
        }
        if (term != ""){
          q.term(term, {  usePipeline: false, editDistance: 1, boost: 1 })
        }
      })
    });
    
    resultDiv.innerHTML = '';
    resultDiv.insertAdjacentHTML('afterbegin', '<p class="results__found">'+result.length+' {{ site.data.ui-text[site.locale].results_found | default: "Result(s) found" }}</p>');
    
    for (var item in result) {
      var ref = result[item].ref;
      var searchitem =
        '<div class="list__item">'+
          '<article class="archive__item" itemscope itemtype="https://schema.org/CreativeWork">'+
            '<h2 class="archive__item-title" itemprop="headline">'+
              '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
            '</h2>'+
            '<div class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt.split(" ").splice(0,20).join(" ")+'...</div>'+
          '</article>'+
        '</div>';
      resultDiv.insertAdjacentHTML('beforeend', searchitem);
    }
  });
});