const array = [
];
$(document).ready(function () {
    const add_new = () => {
        array.push({
            name: 'mèo ' + Math.floor(Math.random() * 10),
            opti: 1,
            price: Math.floor(Math.random() * 100)
        });
        full_add();
    };
    const full_add = () => {
        var add = array.map((item) => 
        '<tr>'
            +'<td class="head">'
                +'<p>'+item.name+'</p>'
            +'</td>'
            +'<td class="body">'
                +'<div>'
                    +'<input type="button" value="-" class="button giam">'
                    +'<input type="text" value="'+item.opti+'" class="select">'
                    +'<input type="button" value="+" class="button tang">'
                +'</div>'
            +'</td>'
            +'<td class="last">'
                +'<input type="text" value="'+item.price+'$" class="number" disabled>'
                +'<input type="button" value="x" class="button del">'
            +'</td>'
        +'</tr>'
        ).join('');
        document.getElementById('table').innerHTML = add;
        var btn = [...$('.del')];
        var tang = [...$('.tang')];
        var giam = [...$('.giam')];
        var sel = [...$('.select')];
        for(i = 0; i < btn.length; i++){
            $(btn[i]).click(function (e) { 
                e.preventDefault();
                var pos = btn.indexOf(this);
                delete_tr(pos);
            });
            $(tang[i]).click(function (e) { 
                e.preventDefault();
                var pos = tang.indexOf(this);
                change(pos, array[pos].opti + 1)
                
            });
            $(giam[i]).click(function (e) { 
                e.preventDefault();
                var pos = giam.indexOf(this);
                change(pos, array[pos].opti - 1)
            });
            $(sel[i]).change(function (e) { 
                var va = this.value;
                e.preventDefault();
                array.map(item =>{
                    alert(va = item.opti)
                })
            });
        }
        var tong = 0
        array.map(item => {
            if(array[-1]){
                tong = 0
            }
            else{
                tong += item.price * item.opti;
            }
        })
        $('.sumtong').text(tong + '$');
        $('.sumbit').click(function (e) { 
            e.preventDefault();
            
        });
    };
    $('.add-sp').click(function (e) { 
        e.preventDefault();
        add_new();
    });
    var delete_tr = (index) => {
        array.splice(index,1);
        full_add()
    }
    var change = (index, opti) =>{
        if(opti < 1){
            return;
        }
        else{
            array[index].opti = opti;
        }
        full_add()
    } 
});
