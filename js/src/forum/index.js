/*
* This file is part of justoverclock/flachat.
*
* Copyright (c) 2021 Marco Colia.
* https://flarum.it
*
* For the full copyright and license information, please view the LICENSE.md
* file that was distributed with this source code.
*/

import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import IndexPage from 'flarum/components/IndexPage';

app.initializers.add('justoverclock/flachat', () => {
  extend(IndexPage.prototype, 'sidebarItems', (items) => {
    items.add(
      'chatItem',
      [
        m('h1', { id: 'titleNl' }, ['.Fla', m('span', 'Chat')]),
        m("div", { className: "flachatDiv"},
          m("input", {className: "FormChat" , id: "input", placeholder: app.translator.trans('justoverclock-flachat.forum.writeinchat')})
        ),
        m("div", {className: "chatContainer" ,id: "box"})
      ]
    )
  })
  extend(IndexPage.prototype, 'oncreate', function (){
    const pubkey = app.forum.attribute('justoverclock-flachat.publishKey') || 'demo';
    const subkey = app.forum.attribute('justoverclock-flachat.subscribeKey') || 'demo';

    (function() {
      var pubnub = new PubNub({
        publishKey: pubkey,
        subscribeKey: subkey,
        uuid: 'ciaooo'
      });
      function $(id) {
        return document.getElementById(id);
      }
      var box = $('box'),
        input = $('input'),
        channel = 'flaroom';
      pubnub.addListener({
        message: function(obj) {
          box.innerHTML = '<i class="fas fa-comment-alt chatIcon"></i>' + ('' + obj.message).replace(/[<>]/g, '') + '<br>' + box.innerHTML
        }
      });
      pubnub.subscribe({
        channels: [channel]
      });
      input.addEventListener('keyup', function(e) {
        if ((e.keyCode || e.charCode) === 13) {
          pubnub.publish({
            channel: channel,
            message: input.value,
            x: (input.value = '')
          });
        }
      });
    })();
  })
});
