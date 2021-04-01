import { LightningElement, api } from 'lwc';

export default class Selector extends LightningElement {
    @api currentStep = "step-1";
  @api type = "base";
  @api variant = "base";
    selectedProductId;
test='';
    handleProductSelected(evt) {
        this.selectedProductId = evt.detail;
    }

   
}
