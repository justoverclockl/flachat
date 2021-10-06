/*
* This file is part of justoverclock/flachat.
*
* Copyright (c) 2021 Marco Colia.
* https://flarum.it
*
* For the full copyright and license information, please view the LICENSE.md
* file that was distributed with this source code.
*/

import app from 'flarum/admin/app';

app.initializers.add('justoverclock/flachat', () => {
  app.extensionData
    .for('justoverclock-flachat')
    .registerSetting({
      setting: 'justoverclock-flachat.publishKey',
      name: 'justoverclock-flachat.publishKey',
      type: 'text',
      label: app.translator.trans('justoverclock-flachat.admin.publishKey'),
      help: app.translator.trans('justoverclock-flachat.admin.publishKey-help'),
    })
    .registerSetting({
      setting: 'justoverclock-flachat.subscribeKey',
      name: 'justoverclock-flachat.subscribeKey',
      type: 'text',
      label: app.translator.trans('justoverclock-flachat.admin.subscribeKey'),
      help: app.translator.trans('justoverclock-flachat.admin.subscribeKey-help'),
    })
});
