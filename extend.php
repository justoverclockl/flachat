<?php

/*
 * This file is part of justoverclock/flachat.
 *
 * Copyright (c) 2021 Marco Colia.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Justoverclock\FlaChat;

use Flarum\Extend;
use Flarum\Frontend\Document;
use Flarum\Api\Event\Serializing;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less')
        ->content(function (Document $document) {
            $document->head[] = '<script src=https://cdn.pubnub.com/sdk/javascript/pubnub.4.28.2.min.js></script>';
        }),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),
    new Extend\Locales(__DIR__.'/locale'),
    (new Extend\Settings)
        ->serializeToForum('justoverclock-flachat.publishKey', 'justoverclock-flachat.publishKey')
        ->serializeToForum('justoverclock-flachat.subscribeKey', 'justoverclock-flachat.subscribeKey')
];
