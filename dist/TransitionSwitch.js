var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from 'react';
import styled from 'styled-components';
import { Route, useHistory, matchPath } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
var defaultDuration = 800;
export default function TransitionSwitch(_a) {
    var duration = _a.duration, over = _a.over, routes = _a.routes;
    var history = useHistory();
    var _b = React.useState(''), currentPath = _b[0], setPath = _b[1];
    React.useEffect(function () {
        // 空配列なら初回実行
        if (currentPath === '') {
            // pathがなかったらトップにリダイレクト
            if (routes.every(function (route) {
                return matchPath(history.location.pathname, {
                    path: route.path,
                    exact: route.exact
                }) === null;
            })) {
                history.push('/');
            }
            else {
                setPath(history.location.pathname);
            }
        }
        else if (history.location.pathname !== currentPath) {
            // 位置固定
            document.body.style.overflow = 'hidden';
            setTimeout(function () {
                // 位置固定解除
                document.body.style.overflow = 'auto';
                return window.scrollTo(0, 0);
            }, duration);
            setPath(history.location.pathname);
        }
    }, [history.location.pathname, currentPath, setPath]);
    return (React.createElement(React.Fragment, null, routes.map(function (_a, i) {
        var path = _a.path, Component = _a.Component, exact = _a.exact;
        return (React.createElement(Route, { key: path + "-" + i, exact: exact, path: path }, function (_a) {
            var match = _a.match;
            return (React.createElement(CSSTransition, { in: match != null, timeout: duration ? duration : defaultDuration, classNames: 'page', unmountOnExit: true },
                React.createElement("div", null,
                    over ? (over) : (React.createElement(DefaultOver, { duration: duration ? duration : defaultDuration })),
                    React.createElement(Page, { duration: duration ? duration : defaultDuration },
                        React.createElement(Component, null)))));
        }));
    })));
}
var Page = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n  height: 100vh;\n  will-change: opacity;\n\n  .page-enter > & {\n    opacity: 0;\n  }\n\n  .page-enter-active > & {\n    opacity: 1;\n    transition: all ", "ms ease\n      ", "ms;\n  }\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n  height: 100vh;\n  will-change: opacity;\n\n  .page-enter > & {\n    opacity: 0;\n  }\n\n  .page-enter-active > & {\n    opacity: 1;\n    transition: all ", "ms ease\n      ", "ms;\n  }\n"])), function (_a) {
    var duration = _a.duration;
    return duration;
}, function (_a) {
    var duration = _a.duration;
    return duration;
});
var DefaultOver = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1000000;\n  width: 100%;\n  height: 100vh;\n  transform: translateX(-100%);\n  background: rgba(0, 0, 0, 1);\n\n  .page-enter > & {\n    transform: translateX(-100%);\n  }\n\n  .page-enter-active > & {\n    transform: translateX(0%);\n    transition: all ", "ms ease;\n  }\n\n  .page-enter-done > & {\n    transform: translateX(100%);\n    transition: all ", "ms ease\n      300ms;\n  }\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1000000;\n  width: 100%;\n  height: 100vh;\n  transform: translateX(-100%);\n  background: rgba(0, 0, 0, 1);\n\n  .page-enter > & {\n    transform: translateX(-100%);\n  }\n\n  .page-enter-active > & {\n    transform: translateX(0%);\n    transition: all ", "ms ease;\n  }\n\n  .page-enter-done > & {\n    transform: translateX(100%);\n    transition: all ", "ms ease\n      300ms;\n  }\n"])), function (_a) {
    var duration = _a.duration;
    return duration;
}, function (_a) {
    var duration = _a.duration;
    return duration;
});
var templateObject_1, templateObject_2;
