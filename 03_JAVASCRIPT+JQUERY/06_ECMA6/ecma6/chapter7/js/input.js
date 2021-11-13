export default class{  // ���� Ŭ���� ����
	constructor({save}){ // ����� ���� �����ϱ� ���� �ݹ��Լ��� ���޹���
		this.$value = $('#value');
		this.$btn = $('#btn');
		this.save = save;

		this.$btn.on('click', ()=>{  // �����ư�� Ŭ���� �Էµ� ���� �ݹ��Լ��� ����
			let value = this.$value.val();
			this.$value.val('');
			this.save.call(this, value);
		});
	}
	set value(value){
		this.$value.val(value);
	}				  
}