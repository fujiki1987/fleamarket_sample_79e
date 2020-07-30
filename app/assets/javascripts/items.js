$(document).on('turbolinks:load', ()=> {
  // 画像用のinputを生成する関数
  const buildFileField = (index)=> {
    const html = `<div class="PhotoBox" id="image-box">
                    <label class="PhotoBox__Item-image">
                      <i class="fa fa-camera"></i>
                      <div class="js-file_group" data-index="${index}">
                        <input class="PhotoBox__Item-File js-file" type="file"
                        name="item[item_images_attributes][${index}][image]"
                        id="item_item_images_attributes_${index}_image">
                        <span>クリックしてファイルをアップロード</span>
                      </div>
                    </label>
                  </div>
                  <span class="js-remove">削除</span>`;
    return html;
  }

  // file_fieldのnameに動的なindexをつける為の配列
  let fileIndex = [1,2,3,4,5,6,7,8,9,10];

  $('#image-box').on('change', '.js-file', function(e) {
    // fileIndexの先頭の数字を使ってinputを作る
    $('#image-box').append(buildFileField(fileIndex[0]));
    fileIndex.shift();
    // 末尾の数に1足した数を追加する
    fileIndex.push(fileIndex[fileIndex.length - 1] + 1)
  });

  $('#image-box').on('click', '.js-remove', function() {
    $(this).parent().remove();
    // 画像入力欄が0個にならないようにしておく
    if ($('.js-file').length == 0) $('#image-box').append(buildFileField(fileIndex[0]));
  });
});
