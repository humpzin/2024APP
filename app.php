<!doctype html>
<html lang="jp">

<head>
    <meta name="robots" content="noindex">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="content-type" content="text/html; charset = UTF-8">
    <title>2024app</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
    <!-- Compressed CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.8.1/dist/css/foundation.min.css" crossorigin="anonymous">
    <!-- Compressed JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/foundation-sites@6.8.1/dist/js/foundation.min.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="css/app.css<?php echo ('?=' . time()) ?>">
    <!-- The core Firebase JS SDK is always required and must be listed first -->
    <script src="https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.2.9/firebase-auth.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.2.9/firebase-database.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.5.0/firebase-firestore.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.2.9/firebase-storage.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.2.9/firebase-analytics.js"></script>
    <!-- jquery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
</head>

<body>
    <!-- Slider main container -->
    <div class="swiper">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">

            <!-- Todos-Slide -->
            <div class="swiper-slide"><span class="title-bar">TodoList</span>
                <div id="Todos">
                    <ui id="todo-list" class="app-list-item">
                    </ui>
                    <div>
                        <input type="text" id="todo-text" placeholder="Todoを入力してください">
                        <button id="todo-add-button" class="button float-right">Add</button>
                    </div>
                </div>
            </div>
            <!-- VideoChat-Slide -->
            <div class="swiper-slide"><span class="title-bar">VideoChat</span>
                <p class="text-s">ID: <span id="my-id"></span></p>
                <div>
                </div>
                <div class="grid-x grid-padding-x align-center">
                    <input id="room-name" type="text" class="border-solid cell small-10" placeholder="Room Number"/>
                    <button id="join" class="button cell small-1">join</button>
                </div>
                <video id="local-video" muted playsinline></video>
                <div id="button-area"></div>
                <div id="remote-media-area"></div>
            </div>
            <!-- Gifts-Slide -->
            <div class="swiper-slide"><span class="title-bar">GiftList</span>
                <div id="Gifts">
                    <ui id="gift-list" class="app-list-item">
                    </ui>
                    <input type="text" id="gift-text" placeholder="Giftを入力してください">
                    <button id="gift-add-button" class="button float-right">Add</button>
                </div>
            </div>
        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>

        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

        <!-- If we need scrollbar -->
        <div class="swiper-scrollbar"></div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <script src="js/swipe.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@skyway-sdk/room/dist/skyway_room-latest.js"></script>
    <script src="js/skyway.js"></script>
    <script src="js/firebase.js"></script>
</body>

</html>