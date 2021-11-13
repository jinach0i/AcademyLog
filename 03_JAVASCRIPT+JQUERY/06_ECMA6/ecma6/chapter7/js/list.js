export default class{
    constructor({modify, del}){  // app 모듈로 부터 콜백함수를 전달받음
        this.modify = modify;    // this에 참조함    
        this.del = del;
        this.$list = $('#list');
  
        this.render([]);
    }
  
    render(list){
        this.$list = $('#list').empty();
  
        if(list.length > 0){
            for(let row of list){
                let self = this;
                let template = `<tr>
                    <td><span>${row.content}</span></td>
                    <td class="text-center"><span>${row.date}</span></td>
                    <td class="text-right">
                    <input class="btn btn-default btn-modify" type="button" value="수정"/>
                    <input class="btn btn-default btn-delete" type="button" value="삭제"/>
                    </td>
                    </tr>`;
  
                let $template = $(template);
                this.$list.append($template);

                // 수정 버튼에 클릭 이벤트 생성
                $template.find('.btn-modify').bind('click', function(){
                    // app 모둘에 index를 전달
                    self.modify.call(this, $(this).parents('tr').index());
                });
                
                $template.find('.btn-delete').bind('click', function(){
                    self.del.call(this, $(this).parents('tr').index());
                });
            }
        } else {
            let template = `<tr>
                <td colspan="3" class="no-list"><span>등록된 할 일이 없습니다.</span></td>
                </tr>`;
            let $template = $(template);
            this.$list.append($template);
        }
    }
}