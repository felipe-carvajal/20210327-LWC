import { LightningElement, track } from 'lwc';

export default class ButtonIconStatefulBasic extends LightningElement {
    @track shipState = false;
    @track crewState = false;
    @track likeState = false;
    @track answerState = false;
    @track likeStateSize01 = false;
    @track likeStateSize02 = false;
    @track likeStateSize03 = false;
    @track likeStateSize04 = false;
    @track likeStateDisabled = false;
    @track answerStateDisabled = false;
    handleShipButtonClick() {
        this.shipState = !this.shipState;
    }

    handleCrewButtonClick() {
        this.crewState = !this.crewState;
    }


    handleLikeButtonClick() {
        this.likeState = !this.likeState;
    }

    handleAnswerButtonClick() {
        this.answerState = !this.answerState;
    }

    handleLikeButtonSizeClick(event) {
        const buttonNumber = event.target.dataset.buttonNumber;

        this[`likeStateSize${buttonNumber}`] = !this[
            `likeStateSize${buttonNumber}`
        ];
    }

    handleLikeButtonDisabledClick() {
        this.likeStateDisabled = !this.likeStateDisabled;
    }

    handleAnswerButtonDisabledClick() {
        this.answerStateDisabled = !this.answerStateDisabled;
    }
}
