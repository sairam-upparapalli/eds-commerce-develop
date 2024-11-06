(function(e,r){try{if(typeof document<"u"){const a=document.createElement("style"),o=r.styleId;for(const t in r.attributes)a.setAttribute(t,r.attributes[t]);a.setAttribute("data-dropin",o),a.appendChild(document.createTextNode(e));const c=document.querySelector('style[data-dropin="sdk"]');if(c)c.after(a);else{const t=document.querySelector('link[rel="stylesheet"], style');t?t.before(a):document.head.append(a)}}}catch(a){console.error("dropin-styles (injectCodeFunction)",a)}})(`.account-orders-list-header{margin-bottom:var(--spacing-medium)}.account-orders-list ul{list-style:none;margin:0;padding:0}.account-orders-list__date-select{margin-bottom:var(--spacing-xbig)}.account-orders-list__date-select span{display:inline-block;font:var(--type-details-caption-1-font);letter-spacing:var(--type-details-caption-1-letter-spacing);margin-bottom:var(--spacing-xsmall)}.account-orders-list__date-select .dropin-picker{max-width:224px}
.account-form{display:grid;flex-direction:column;gap:var(--spacing-medium)}@media (min-width: 768px){.account-form{display:grid;grid-template-columns:repeat(2,1fr)}.account-form>.dropin-field:nth-child(1),.account-form>.dropin-field:nth-child(2){grid-column:span 1}.account-form>.dropin-field:nth-child(3),.account-form>.dropin-field:nth-child(4),.account-form>.dropin-field:nth-child(5){grid-column:span 2}.account-form>.dropin-field:nth-child(6),.account-form>.dropin-field:nth-child(7){grid-column:span 1}.account-form>.dropin-field:nth-child(8),.account-form>.dropin-field:nth-child(9){grid-column:span 1}.account-form>.dropin-field:nth-child(n+10){grid-column:span 2}}.account-form [class$=-hidden]{position:absolute;opacity:0;height:0;width:0;overflow:hidden;clip:rect(0,0,0,0)}.account-account-loaders--card-loader{margin-bottom:var(--spacing-small)}.account-account-loaders--picker-loader div:first-child{max-width:200px}.account-account-loaders--picker-loader div:nth-child(3){max-width:400px}.account-address-card{margin-bottom:var(--spacing-small)}.account-address-card .dropin-card__content{display:grid;grid-template-columns:1fr auto;gap:var(--spacing-small) 0px;grid-template-areas:"description action" "labels action"}.account-address-card .account-address-card__action{display:flex;justify-content:flex-end;align-items:baseline;cursor:pointer;grid-area:action}.account-address-card .account-address-card__action--editbutton{margin-left:var(--spacing-small)}.account-address-card .account-address-card__action button{padding:0}.account-address-card .account-address-card__action button:hover{text-decoration:underline}.account-address-card .account-address-card__description{grid-area:description;margin:0;padding:0}.account-address-card .account-address-card__labels{display:flex;gap:0 var(--spacing-xsmall);grid-area:labels}.account-address-card .account-address-card__description p{font:var(--type-body-1-default-font);letter-spacing:var(--type-body-1-default-letter-spacing);line-height:var(--spacing-xbig);color:var(--color-neutral-800);padding:0;margin:0 var(--spacing-xsmall) 0 0}.account-address-card .account-address-card__description p:nth-child(1),.account-address-card .account-address-card__description p:nth-child(2){margin:0 var(--spacing-xsmall) var(--spacing-xsmall) 0;color:var(--color-neutral-800);font:var(--type-button-2-font);font-weight:500;cursor:default}.account-address-card .account-address-card__description p:nth-child(1),.account-address-card .account-address-card__description p:nth-child(3),.account-address-card .account-address-card__description p:nth-child(4),.account-address-card .account-address-card__description p:nth-child(6){float:left}.account-actions-address{cursor:pointer;padding:var(--spacing-xsmall) var(--spacing-medium);border-radius:var(--shape-border-radius-2);border:var(--shape-border-width-2) solid var(--color-neutral-400);background-color:var(--color-neutral-50);width:100%;height:88px;display:flex;align-items:center;justify-content:space-between}.account-actions-address--selectable{max-width:100%;width:auto}.account-actions-address__title{font:var(--type-button-2-font);letter-spacing:var(--type-button-2-letter-spacing)}.account-actions-address svg{stroke:var(--shape-icon-stroke-4);color:var(--color-neutral-800)}.account-address-modal{position:relative;padding:var(--spacing-xbig) var(--spacing-xxbig) var(--spacing-xxbig) var(--spacing-xxbig);width:100%;margin:auto;max-width:721px}.dropin-modal__body--medium>.dropin-modal__header-title,.dropin-modal__body--full>.dropin-modal__header-title,.account-address-modal .dropin-modal__content{margin:0;align-items:center}.account-address-modal .dropin-modal__header-title-content h3{font:var(--type-headline-1-font);letter-spacing:var(--type-headline-1-letter-spacing);margin:0;padding:0}.account-address-modal .account-address-modal__spinner{position:absolute;top:0;left:0;background-color:var(--color-neutral-200);opacity:.8;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:1}.account-address-modal p{color:var(--color-neutral-800);font:var(--type-body-2-strong-font);letter-spacing:var(--type-body-2-strong-letter-spacing);margin-bottom:var(--spacing-medium)}.account-address-modal .account-address-modal__buttons{display:flex;align-items:center;justify-content:right;gap:0 var(--spacing-small)}.account-empty-list{margin-bottom:var(--spacing-small)}.account-empty-list.account-empty-list--minified,.account-empty-list .dropin-card{border:none}.account-empty-list .dropin-card__content{gap:0;padding:var(--spacing-xxbig)}.account-empty-list.account-empty-list--minified .dropin-card__content{flex-direction:row;align-items:center;padding:var(--spacing-big) var(--spacing-small)}.account-empty-list .dropin-card__content svg{width:64px;height:64px;margin-bottom:var(--spacing-medium)}.account-empty-list.account-empty-list--minified .dropin-card__content svg{margin:0 var(--spacing-small) 0 0;width:32px;height:32px}.account-empty-list .dropin-card__content svg path{fill:var(--color-neutral-800)}.account-empty-list.account-empty-list--minified .dropin-card__content svg path{fill:var(--color-neutral-500)}.account-empty-list .dropin-card__content p{font:var(--type-headline-1-font);letter-spacing:var(--type-headline-1-letter-spacing);color:var(--color-neutral-800)}.account-empty-list.account-empty-list--minified .dropin-card__content p{font:var(--type-body-1-strong-font);color:var(--color-neutral-800)}.account-orders-list-action{margin:0;padding:0;border:none;background-color:transparent;cursor:pointer;text-decoration:none}.account-orders-list-action--minifiedView{width:100%;text-align:left;font:var(--type-body-1-default-font)}.account-orders-list-action.account-orders-list-action--minifiedView:hover{text-decoration:none}.account-orders-list-action--minifiedView .account-orders-list-action__card-wrapper{display:flex;justify-content:space-between;align-items:center;color:var(--color-neutral-800);height:calc(88px - var(--spacing-small) * 2)}.account-orders-list-action__card-wrapper>p{font:var(--type-button-2-font);letter-spacing:var(--type-button-2-letter-spacing)}.account-orders-list-action__card-wrapper svg,.account-orders-list-action svg{color:var(--color-neutral-800)}.account-orders-list-action--minifiedView .dropin-card__content{padding:var(--spacing-small) var(--spacing-medium)}.account-orders-list-action--minifiedView p{font:var(--type-body-1-strong-font)}.account-orders-list-card{height:100%;margin-bottom:var(--spacing-small)}.account-orders-list-card .dropin-card__content{padding:var(--spacing-medium);display:grid;grid-template-areas:"content actions" "imageList actions";gap:0;max-height:100%}.account-orders-list-card .account-orders-list-card__content{grid-area:content;margin-bottom:var(--spacing-small)}.account-orders-list-card__content--quantity{font-weight:500;color:var(--color-neutral-800)}.account-orders-list-card__content--track_number,.account-orders-list-card__content--return_number{font:var(--type-body-1-strong-font);letter-spacing:var(--type-body-1-strong-letter-spacing);cursor:pointer}.account-orders-list-card .account-orders-list-card__content>div:first-child{font-weight:500}.account-orders-list-card .account-orders-list-card__content p,.account-orders-list-card .account-orders-list-card__content div{padding:0;text-align:left;font:var(--type-body-1-default-font);margin:0 0 var(--spacing-small) 0;color:var(--color-neutral-800)}.account-orders-list-card p.account-orders-list-card__content--product-name{margin:0}.account-orders-list-card .account-orders-list-card__content p:last-child{margin:0}.account-orders-list-card .account-orders-list-card__content div{font:var(--type-button-2-font);margin-bottom:var(--spacing-small)}.account-orders-list-card .account-orders-list-card__actions{grid-area:actions}.account-orders-list-card .account-orders-list-card__images{overflow:auto}.account-orders-list-card .account-orders-list-card__images .dropin-content-grid__content{grid-template-columns:repeat(6,max-content)!important}.account-orders-list-card .account-orders-list-card__images-3 .dropin-content-grid__content{grid-template-columns:repeat(3,max-content)!important}.account-orders-list-card .account-orders-list-card__images img{object-fit:contain;width:65px;height:65px}.account-orders-list-card .account-orders-list-card__actions{position:relative;align-self:center;margin-left:auto}@media (min-width: 768px){.account-orders-list-card.account-orders-list-card--full .dropin-card__content{max-height:100%}}.account-addresses-header{margin-bottom:var(--spacing-medium)}.account-addresses-wrapper{box-sizing:border-box;position:relative}.account-addresses-wrapper--select-view{position:relative;margin:0;padding:0;border:none}.account-addresses-wrapper--select-view input[type=radio]{position:absolute;clip:rect(0,0,0,0);width:1px;height:1px;padding:0;margin:-1px;border:0;overflow:hidden}.account-addresses-wrapper--select-view .account-addresses-wrapper__label{cursor:pointer;display:block;border-radius:0}.account-addresses-wrapper--select-view .account-addresses-wrapper__label .account-address-card{border-radius:0}.account-addresses-wrapper--select-view .account-addresses-wrapper__label:nth-child(2){border-radius:var(--shape-border-radius-1) var(--shape-border-radius-1) 0 0}.account-addresses-wrapper--select-view>.account-addresses-wrapper__label:nth-child(2)>.account-address-card{border-radius:var(--shape-border-radius-1) var(--shape-border-radius-1) 0 0}.account-addresses-wrapper--select-view>.account-addresses-wrapper__label:last-child,.account-addresses-wrapper--select-view>.account-addresses-wrapper__label:last-child>.account-actions-address.account-actions-address--address{border-radius:0 0 var(--shape-border-radius-1) var(--shape-border-radius-1)}.account-addresses-wrapper--select-view .account-addresses-wrapper__label .account-address-card,.account-addresses-wrapper--select-view .account-addresses-wrapper__label .account-actions-address.account-actions-address--address{background-color:var(--color-neutral-200)}.account-addresses-wrapper--select-view input[type=radio]:checked+.account-addresses-wrapper__label>.account-address-card{border:var(--shape-border-width-1) solid var(--color-neutral-900);position:relative}.account-addresses-wrapper--select-view input[type=radio]:checked+.account-addresses-wrapper__label>.account-addresses-form__footer__wrapper{border:var(--shape-border-width-1) solid var(--color-neutral-900);position:relative}.account-addresses-wrapper--select-view input[type=radio]:checked+.account-addresses-wrapper__label .account-address-card,.account-addresses-wrapper--select-view input[type=radio]:checked+.account-addresses-wrapper__label .account-actions-address.account-actions-address--address{background-color:var(--color-neutral-50)}.account-addresses-wrapper--select-view .account-address-card{margin:0}.account-addresses-wrapper--select-view .account-addresses-form__footer__wrapper{padding:var(--spacing-medium)}.account-address-form-wrapper{box-sizing:border-box;background-color:var(--color-neutral-50)}.account-address-form-wrapper__notification{margin-bottom:var(--spacing-medium)}.account-address-form-wrapper__title{color:var(--color-neutral-800);font:var(--type-headline-2-strong-font);letter-spacing:var(--type-headline-2-strong-letter-spacing);margin-bottom:var(--spacing-medium)}.account-address-form-wrapper__buttons{display:flex;align-items:center;justify-content:end;gap:0 var(--spacing-medium);margin-top:var(--spacing-medium)}.account-address-form-wrapper__buttons--empty{gap:0;margin:0;padding:0;display:inline-block}.account-address-form-wrapper__buttons button{min-width:142px}.account-change-password .dropin-card__content{gap:0}.account-change-password__title,.account-change-password .account-change-password__notification,.account-change-password .account-change-password__fields .account-change-password__fields-item{margin-bottom:var(--spacing-medium)}.account-change-password .account-change-password__fields .account-change-password__fields-item:last-child{margin-bottom:0}.account-change-password .account-change-password__actions{display:flex;justify-content:right;align-items:center;gap:0 var(--grid-3-gutters);margin-top:var(--spacing-xlarge)}.account-change-password .account-change-password__actions button{min-width:144px}.account-edit-customer-information__title{margin-bottom:var(--spacing-medium)}.account-edit-customer-information .dropin-card__content{gap:0}.account-edit-customer-information .account-edit-customer-information__notification{margin-bottom:var(--spacing-medium)}.account-edit-customer-information .account-edit-customer-information-form__field:nth-child(n+3),.account-edit-customer-information .account-edit-customer-information__password{grid-column:span 2}.account-edit-customer-information .account-edit-customer-information__actions{display:flex;justify-content:end;align-items:center;gap:0 var(--grid-2-gutters);grid-column:span 2}.account-edit-customer-information .account-edit-customer-information__actions button{min-width:144px}.customer-information__title{margin-bottom:var(--spacing-medium)}.account-customer-information-card-short{margin-bottom:var(--spacing-small)}.account-customer-information-card .dropin-card__content{gap:0}.account-customer-information-card__wrapper{display:grid;grid-template-columns:1fr auto;align-items:start}.account-customer-information-card .account-customer-information-card__actions{display:flex;justify-content:space-between;align-items:center;gap:0 var(--grid-2-gutters)}.account-customer-information-card .account-customer-information-card__actions button{cursor:pointer;margin:0;padding:0}.account-customer-information-card__content p{font:var(--type-body-1-default-font);margin:0 var(--spacing-xsmall) 0 0;line-height:var(--spacing-xbig);padding:0}.account-customer-information-card__content p:nth-child(1),.account-customer-information-card__content p:nth-child(2){font:var(--type-body-1-strong-font);font-weight:500;margin:0 var(--spacing-xsmall) var(--spacing-xsmall) 0}.account-customer-information-card__content p:nth-child(1){float:left}`,{styleId:"account"});
import{jsx as r}from"@dropins/tools/preact-jsx-runtime.js";import{Render as o}from"@dropins/tools/lib.js";import{useState as n,useEffect as i}from"@dropins/tools/preact-hooks.js";import{UIProvider as l}from"@dropins/tools/components.js";import{events as c}from"@dropins/tools/event-bus.js";const m={minifiedView:{CustomerInformation:{containerTitle:"Account settings",genderMale:"Male",genderFemale:"Female",changePassword:{passwordValidationMessage:{chartTwoSymbols:"Use characters and numbers or symbols",chartThreeSymbols:"Use characters, numbers and symbols",chartFourSymbols:"Use uppercase characters, lowercase characters, numbers and symbols",messageLengthPassword:"At least {minLength} characters long",passwordMismatch:"Passwords do not match. Please make sure both password fields are identical",incorrectCurrentPassword:"The current password you entered is incorrect. Please check and try again.",passwordUpdateMessage:"Your password has been updated"},containerTitle:"Change password",currentPassword:{placeholder:"Password",floatingLabel:"Password"},newPassword:{placeholder:"New Password",floatingLabel:"New Password"},confirmPassword:{placeholder:"Confirm new password",floatingLabel:"Confirm new password"},buttonSecondary:"Cancel",buttonPrimary:"Save"},customerInformationCard:{buttonSecondary:"Change password",buttonPrimary:"Edit",accountCreation:"Account creation date"},editCustomerInformation:{containerTitle:"Edit details",buttonSecondary:"Cancel",buttonPrimary:"Save",accountSuccess:"Your account information has been updated.",accountError:"Your account information has not been updated.",passwordField:{placeholder:"Password",floatingLabel:"Password"}}},Addresses:{containerTitle:"Addresses",editAddressFormTitle:"Edit address",differentAddressFormTitle:"Deliver to new address",viewAllAddressesButton:"View address list",differentAddressButton:"Use a different address",addressCard:{actionRemove:"Remove",actionEdit:"Edit",cardLabelShipping:"Shipping",cardLabelBilling:"Billing",defaultLabelText:"DEFAULT"},removeAddressModal:{title:"Remove address",description:"Are you sure you would like to remove this address?",actionCancel:"Cancel",actionConfirm:"Remove"}},OrdersList:{containerTitle:"Recent orders",viewAllOrdersButton:"View all orders",ariaLabelLink:"Redirect to full order information",dateOrderPlaced:"Date order placed",OrdersListCard:{orderNumber:"Order number:",itemsAmount:"items",carrier:"Carrier:",returns:"Return(s):",orderDate:"Placed on"},OrdersListSelectDate:{pastSixMonths:"Past 6 months",currentYear:"Current year",viewAll:"View all"}},EmptyList:{Addresses:{message:"No saved addresses"},OrdersList:{message:"No orders"}}},fullSizeView:{Addresses:{containerTitle:"Addresses",editAddressFormTitle:"Edit address",differentAddressFormTitle:"Deliver to new address",newAddressFormTitle:"Add address",addNewAddressButton:"Create new",differentAddressButton:"Use a different address",addressCard:{actionRemove:"Remove",actionEdit:"Edit",cardLabelShipping:"Shipping",cardLabelBilling:"Billing",defaultLabelText:"DEFAULT"},removeAddressModal:{title:"Remove address",description:"Are you sure you would like to remove this address?",actionCancel:"Cancel",actionConfirm:"Remove"}},OrdersList:{containerTitle:"Your orders",ariaLabelLink:"Redirect to full order information",dateOrderPlaced:"Date order placed",OrdersListCard:{orderNumber:"Order number:",itemsAmount:"items",carrier:"Carrier:",returns:"Return(s):",orderDate:"Placed on"},OrdersListSelectDate:{pastSixMonths:"Past 6 months",currentYear:"Current year",viewAll:"View all"}},EmptyList:{Addresses:{message:"No saved addresses"},OrdersList:{message:"No orders"}}},AddressForm:{formText:{secondaryButton:"Cancel",primaryButton:"Save",defaultShippingLabel:"Set as default shipping address",defaultBillingLabel:"Set as default billing address",saveAddressBook:"Save in address book"}},FormText:{requiredFieldError:"This is a required field.",numericError:"Only numeric values are allowed.",alphaNumWithSpacesError:"Only alphanumeric characters and spaces are allowed.",alphaNumericError:"Only alphanumeric characters are allowed.",alphaError:"Only alphabetic characters are allowed.",emailError:"Please enter a valid email address.",dateError:"Please enter a valid date.",dateLengthError:"Date must be between {min} and {max}.",urlError:"Please enter a valid URL, e.g., http://www.adobe.com.",lengthTextError:"Text length must be between {min} and {max} characters."}},u={Account:m},w={default:u},p=({children:a})=>{const[s,t]=n("en_US");return i(()=>{const e=c.on("locale",d=>{t(d)},{eager:!0});return()=>{e==null||e.off()}},[]),r(l,{lang:s,langDefinitions:w,children:a})},L=new o(r(p,{}));export{L as render};
