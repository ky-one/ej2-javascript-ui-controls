/**
 * ColorPicker Sample
 */
import { CheckBox, ChangeEventArgs as ChangeArgs } from '@syncfusion/ej2-buttons';
import { InPlaceEditor } from '../../../src/inplace-editor/base/inplace-editor';
import { ColorPicker } from './../../../src/inplace-editor/modules/color-picker';

InPlaceEditor.Inject(ColorPicker);

let serviceUrl: string = 'https://ej2services.syncfusion.com/development/web-services/api/Editor/UpdateData';

new CheckBox({ label: 'Enable RTL', checked: false, change: onRtlChange }, '#rtl');
new CheckBox({ label: 'Enable Persistence', checked: false, change: onPersistChange }, '#persist');
new CheckBox({ label: 'Disable Editor', checked: false, change: onDisabledChange }, '#disabled');
new CheckBox({ label: 'ShowButtons', checked: true, change: onShowButtonsChange }, '#showButtons');
new CheckBox({ label: 'EnableEditMode', checked: false, change: onEditorOpenChange }, '#openEditor');
new CheckBox({ label: 'SubmitOnEnter', checked: true, change: onSubmitOnEnterChange }, '#enterSubmit');

let editObj: InPlaceEditor = new InPlaceEditor({
    type: 'Color',
    primaryKey: '1',
    url: serviceUrl,
    value: '#eaeaea',
    adaptor: 'UrlAdaptor',
    name: 'Color',
    popupSettings: {
        title: 'Edit'
    }
});
editObj.appendTo('#element');

document.getElementById('renderMode').addEventListener('change', (e: any) => {
    switch (e.target.value) {
        case "1":
            document.body.classList.remove('e-bigger');
            break;
        case "2":
            document.body.classList.add('e-bigger');
            break;
    }
});

document.getElementById('themes').addEventListener('change', (e: any) => {
    document.getElementsByTagName('link')[0].href = '../theme-files/' + e.target.value + '.css';
});

document.getElementById('mode').addEventListener('change', (e: any) => {
    editObj.mode = e.target.value;
    editObj.dataBind();
});

document.getElementById('editOn').addEventListener('change', (e: any) => {
    editObj.editableOn = e.target.value;
    editObj.dataBind();
});

document.getElementById('blurAction').addEventListener('change', (e: any) => {
    editObj.actionOnBlur = e.target.value;
    editObj.dataBind();
});

function onRtlChange(e: ChangeArgs): void {
    editObj.enableRtl = e.checked;
    editObj.dataBind();
}

function onPersistChange(e: ChangeArgs): void {
    editObj.enablePersistence = e.checked;
    editObj.dataBind();
}

function onDisabledChange(e: ChangeArgs): void {
    editObj.disabled = e.checked;
    editObj.dataBind();
}

function onShowButtonsChange(e: ChangeArgs): void {
    editObj.showButtons = e.checked;
    editObj.dataBind();
}

function onEditorOpenChange(e: ChangeArgs): void {
    editObj.enableEditMode = e.checked;
    editObj.dataBind();
}

function onSubmitOnEnterChange(e: ChangeArgs): void {
    editObj.submitOnEnter = e.checked;
    editObj.dataBind();
}