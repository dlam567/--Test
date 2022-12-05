var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { classNames } from '../common/utils';
import transition from '../mixins/transition';
delete props.visible;
const { prefix } = config;
const name = `${prefix}-popup`;
let Popup = class Popup extends SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = ['t-class', 't-class-content'];
        this.behaviors = [transition()];
        this.options = {
            multipleSlots: true,
        };
        this.properties = props;
        this.data = {
            prefix,
            classPrefix: name,
            className: name,
        };
        this.lifetimes = {
            attached() {
                this.setClass();
            },
        };
        this.methods = {
            setClass() {
                const { placement, showOverlay } = this.properties;
                const className = classNames(name, `${name}--${placement}`, {
                    [`${name}--overlay-transparent`]: !showOverlay,
                });
                this.setData({
                    className,
                });
            },
            handleOverlayClick() {
                const { closeOnOverlayClick } = this.properties;
                if (closeOnOverlayClick) {
                    this.triggerEvent('visible-change', { visible: false });
                }
            },
            handleClose() {
                this.triggerEvent('visible-change', { visible: false });
            },
        };
    }
};
Popup = __decorate([
    wxComponent()
], Popup);
export default Popup;