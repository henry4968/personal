let file_input = document.getElementsByClassName("file_input")[0];
let faq_upload = document.getElementsByClassName("faq_upload")[0];
faq_upload.addEventListener('click', function () {
    file_input.click();
})

file_input.addEventListener("change", function () {
    // console.log(this.files[0].name);
    let filesname = ``;
    let file_name = document.getElementsByClassName("faq_uploadtext")[0];
    // console.log(file_input.files.length);

    for (let i = 0; i < file_input.files.length; i++) {
        filesname += '(' + (i + 1) + ') ' + '"' + file_input.files[i].name + '"' + ', ';
        // console.log(filesname);

    }
    // console.log(this);
    // filesname = this.files[0].name;
    // console.log(filesname);
    file_name.value = filesname;
});


let cell_format = document.getElementsByClassName('ver')[2]

cell_format.addEventListener("keydown", function (e) {
    // console.log(e.which);
    if ((e.which >= 48 && e.which <= 57) || e.which == 8) {
    } else {
        e.preventDefault();//停掉預設行為
    };
});
cell_format.addEventListener("keyup", function (e) {
    // console.log(e.target.value);
    //一格輸入完跳下一格
    // let str = e.target.value;//這樣輸入格子可以打中文
    let str = (e.target.value).replace(/\D/g, "");//replace(/\D/g,"")除了數字不能打,g是只全部
    e.target.value = str;
});



var form = document.getElementById("form");
let ver = document.getElementsByClassName('ver');
form.addEventListener("submit", function (e) {

    // console.log(ver);
    let name, subject, cell, content;
    for (let i = 0; i < ver.length; i++) {
        if (ver[i].value === "") {
            e.preventDefault();
            if (i == 0) {
                subject = '主旨';
                $(ver[0]).css({
                    'border': '1px red solid',
                });
            } else if (i == 1) {
                name = '姓名';
                $(ver[1]).css({
                    'border': '1px red solid',
                });
            } else if (i == 2) {
                cell = '電話';
                $(ver[2]).css({
                    'border': '1px red solid',
                });
            } else if (i == 3) {
                content = '內容';
                $(ver[3]).css({
                    'border': '1px red solid',
                });
            }
        } else if (ver[i].value !== "") {
            if (i == 0) {
                subject = '';

            } else if (i == 1) {
                name = '';

            } else if (i == 2) {
                cell = '';

            } else if (i == 3) {
                content = '';

            }
        }

    }
    // console.log(`請輸入: ${a}  ${b}  ${c}  ${d}`);
    if (ver[1].value == '' || ver[2].value == '' || ver[3].value == '' || ver[0].value == '') {
        alert(`請輸入: ${subject} ${name} ${cell} ${content}`);
        for (let j = 0; j < ver.length; j++) {
            $(ver[j]).focus(function () {
                $(ver[j]).css('border', '1px black solid');
            });
        };
    } else {
        let file_name = document.getElementsByClassName("faq_uploadtext")[0];
        let file = '附件: ';
        if (file_name.value == '') {
            file = '';
        };
        var is_confirm = confirm(`↓您的表單資料如下↓\n主旨: ${ver[0].value}\n姓名: ${ver[1].value}\n電話: ${ver[2].value}\n內容: ${ver[3].value}\n${file}${file_name.value}\n\n若有誤請按"取消"進行修改`);
        if (is_confirm) {

            let no = '';
            for (let i = 0; i < 5; i++) {
                let num = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
                no = num + no;
            }
            alert(`您的表單編號為--->"${no}"\n謝謝您的提問，我們將會盡快回復您!\n\n溫馨提醒>>>來電時告知表單編號可減少處理時間`);

            let formm = {
                "no": no,
                "subject": ver[0].value,
                "name": ver[1].value,
                "phone": ver[2].value,
                "content": ver[3].value
            };

            let formms = JSON.parse(localStorage.getItem("formms"));
            if (formms) { // 若存在
                formms.unshift(formm);
            } else { // 若不存在
                formms = [formm];
            }
            localStorage.setItem("formms", JSON.stringify(formms));
            return;
        }
        else {
            e.preventDefault();
        }
    }
});







