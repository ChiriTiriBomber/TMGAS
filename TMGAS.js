function getTime(){
  //���t���X�̎擾
  var hoged = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'yyyy-MM-dd HH:mm:ss');
  return(hoged);
}

function doPost(e){
  //Slack��token�͕K���ϐ�����token�ɂ��邱��!
  var token = PropertiesService.getScriptProperties().getProperty('SLACK_ACCESS_TOKEN');
  var verify_token = "token of hook";
  var name = "bi_jo";
  //�f�t�H���g:woman: :man:�ɂ��Ă���
  var icon = ":woman:";
  //�`�����l���w�肵�����ꍇ�͂����ŕϐ���`����post����ۂɂ��̕ϐ����g���Ă�����΂悢
  //var channel = "#gas";
  if(verify_token != e.parameter.token){
    throw new Error("�Ǘ��҂ɖ₢���킹�Ă�������");
  }  
  
  //���C�u�����̂�Ƀg�[�N�����`���Ă�����
  var app = SlackApp.create(token);
  //�����������[�U�[��text���擾
  var post = e.parameter.text;
  //��ŏ������ލۂɏ�Ԃ�������₷���悤�t���O�𗧂ĂĂ���
  var flag;
  //��������i�[�������̂�""��Y�ꂸ��
  var text = "";
  //case�̐�������` �ŏ��l�͂ǂ���1�Œ�
  var max = 3;
  //case1~n�ɂ������̂�0�I����h���悤+1 �����ł�1�`3�������_���őI�o
  var rn = 1 + Math.floor(Math.random() * max);
  
  //������post�������e��**���܂܂�Ă�����\�� indexOf�ŕ�����̃}�b�`���O���s��
  if(post.indexOf("�J�n") != -1){
    //flag = 1;
    switch(rn){
      case 1:
        text = "�������撣���Ăˁ�";
        break;
      case 2:
        text = "����؂��Ă�������";
        break;
      case 3:
        icon = ":man:";
        text = "����������n�̍��ɏ��i�����Ă��";
        break;
    }
  }
  if(post.indexOf("�x�e") != -1){
    //flag = 1;
    switch(rn){
      case 1:
        text = "�x�e���厖��";
        break;
      case 2:
        text = "�撣�肷���ɂ͒��ӂ�����";
        break;
      case 3:
        icon = ":man:";
        text = "�Œ�ł�10���ԕ׋����Ă��琺�������Ă���";
        break;
    }
  }
  if(post.indexOf("�ĊJ") != -1){
    //flag = 1;
    switch(rn){
      case 1:
        text = "�҂��Ă���`��";
        break;
      case 2:
        text = "�����A�撣���Ă��`��";
        break;
      case 3:
        icon = ":man:";
        text = "���Ƃ�100�����Ԃ��낤�Ƃ��A�M�l�ƌ��킷���t�͂����ꌾ�E�E�E�B�͂�A���Ă��񂩂����̃o�J�^��";
        break;
    }
  }
  if(post.indexOf("�I��") != -1){
    //flag = 1;
    switch(rn){
      case 1:
        text = "�����l�Ȃ̂ˁ�";
        break;
      case 2:
        text = "�����͂�������撣��܂����˂���";
        break;
      case 3:
        icon = ":man:";
        //user_name���w�肵�Ă�����Γ��e�������[�U�[�����g�p���邱�Ƃ��\
        text = e.parameter.user_name + "��c�M�l�̎U��l�c�Ō�ɕ׋��ƂƂ��ĔF�߂Ă��!";
        break;
    }
  }
  //e.parameter.channel_id�Ƃ���Ƃ��ŁA���e���������`�����l���ɕԂ��悤�ɂł���
  return app.postMessage(e.parameter.channel_id, text,{
    username: name,
    //icon_url��URL�w��̉摜���A�C�R���ɂ���
    icon_emoji: icon 
  });
}

//�X�v���b�h�V�[�g�ɏ������ޏ���
function setSheet(){
  
}