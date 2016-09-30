// Type definitions for ng-toastr
// Project: https://github.com/Foxandxss/angular-toastr
// Definitions by: Julien Bourgain <https://github.com/JulienBourgain>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

import IScope = angular.IScope;
import IDeferred = angular.IDeferred;

declare namespace ngToastr {
    interface INgToastrService {
        active(): number;
        clear(toast: IToast): void;
        error(message: string, title: string, optionsOverride?: IOptions): IToast;
        info(message: string, title: string, optionsOverride?: IOptions): IToast;
        success(message: string, title: string, optionsOverride?: IOptions): IToast;
        warning(message: string, title: string, optionsOverride?: IOptions): IToast;
        refreshTimer(toast: IToast, newTime: number): void;
    }

    interface IToast {
        toastId: number;
        isOpened: boolean;
        scope: IScope;
        open: IDeferred;
        iconClass: string;
    }

    interface IOptions {
        allowHtml?: boolean;
        closeButton?: boolean;
        closeHtml?: string;
        extendedTimeOut?: number;
        iconClass?: string;
        iconClasses?: IIconClasses;
        messageClass?: string;
        onHidden?: Function;
        onShown?: Function;
        onTap?: Function;
        progressBar?: boolean;
        tapToDismiss?: boolean;
        templates?: any;
        timeOut?: number;
        titleClass?: string;
        toastClass?: string;
    }

    interface IIconClasses {
        error?: string;
        info?: string;
        success?: string;
        warning?: string;
    }
}
