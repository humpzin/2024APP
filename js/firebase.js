var firebaseConfig = {
    apiKey: "AIzaSyB1vLywSsBGfigRtj54uMXGxs2AXPrvbts",
    authDomain: "app-a9411.firebaseapp.com",
    databaseURL: "https://app-a9411-default-rtdb.firebaseio.com/",
    projectId: "app-a9411",
    storageBucket: "app-a9411.appspot.com",
    messagingSenderId: "275921310125",
    appId: "1:275921310125:web:3389fa0922692596841124",
    measurementId: "G-3GGMQ1KZWJ"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

// databaseの参照を取得
const database = firebase.database();

//Todosリストの一覧を取得して表示
getTodos();

//Giftsリストの一覧を取得して表示
getGifts();

//イベントリスナ
$(function () {
    //TODOリスト追加
    $(document).on("click", "#todo-add-button", function () {
        var todo = document.getElementById("todo-text");
        if (todo.value === "") {
            return;
        }
        alert('TODOリスト追加');
        var newPostKey = database.ref().child('posts').push().key; //pushのkeyを事前取得
        database.ref("Todos/" + newPostKey).set({
            todo: todo.value,
            finished: false,
            deleted: false
        });
        todo.value = "";
    });
    //TODOリスト削除
    $(document).on("click", ".alert.button", function () {
        var id = $(this).parent().attr("id");
        alert('TODOリスト削除');
        database.ref("Todos/" + id).remove();
        getTodos();
    });
    //TODOリスト完了
    $(document).on("click", ".checkbox", function () {
        var id = $(this).parent().attr("id");
        alert('TODOリスト完了');
        database.ref("Todos/" + id).once("value", function (data) {
            var finished = data.val().finished;
            database.ref("Todos/" + id).update({
                finished: !finished
            });
        });
    });
    //Giftリスト追加
    $(document).on("click", "#gift-add-button", function () {
        var gift = document.getElementById("gift-text");
        if (gift.value === "") {
            return;
        }
        alert('Giftリスト追加');
        var newPostKey = database.ref().child('posts').push().key; //pushのkeyを事前取得
        database.ref("Gifts/" + newPostKey).set({
            gift: gift.value,
            stars: 1,
            deleted: false
        });
        gift.value = "";
    });
    //starクリック
    $(document).on("click", ".gift-item", function () {
        var id = $(this).attr("id");
        alert('starクリック');
        database.ref("Gifts/" + id).once("value", function (data) {
            var stars = data.val().stars;
            if (stars < 5) {
                database.ref("Gifts/" + id).update({
                    stars: stars + 1
                });
            }
        });
        getGifts();
    });
});

//Todosリストの一覧を取得して表示
function getTodos() {
    $("#todo-list").empty();
    database.ref("Todos").on("child_added", function (data) {
        const v = data.val();
        const k = data.key;
        const todo = v.todo;
        const finished = v.finished;
        if (finished === true) {
            $("#todo-list").prepend(
                '<li class="list-group-item" id="' + k + '"><input type="checkbox" class="checkbox box-border" checked> ' + todo + '<a class="alert button float-right">Del</a></li>')
        } else {
            $("#todo-list").prepend(
                '<li class="list-group-item" id="' + k + '"><input type="checkbox" class="checkbox box-border"> ' + todo + '<a class="alert button float-right">Del</a></li>')
        }
    });
}

//Giftsリストの一覧を取得して表示
function getGifts() {
    $("#gift-list").empty();
    database.ref("Gifts").on("child_added", function (data) {
        const v = data.val();
        const k = data.key;
        const gift = v.gift;
        const stars = v.stars;
        var starschr = "";
        for (var i = 0; i < 5; i++) {
            if (i < stars) {
                starschr += '<font color="#FFD700" >&#9733;</font>';
            } else {
                starschr += '&#9734;';
            }
        }
        $("#gift-list").prepend(
            '<li class="gift-item" id=' + k + '>' + starschr + '<span class="todo-text">' + gift + '</span>')
    });
}