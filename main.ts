touchbit.on(touchbit.TouchPad.c, touchbit.TouchEvent.released, function () {
    basic.showString("c")
    touchbit.setLight(touchbit.TouchPad.c, 1)
})
touchbit.on(touchbit.TouchPad.right, touchbit.TouchEvent.released, function () {
    basic.showArrow(ArrowNames.East)
    touchbit.setLight(touchbit.TouchPad.right, 1)
})
input.onButtonPressed(Button.A, function () {
    touchbit.setLight(touchbit.TouchPad.left, 0)
    touchbit.setLight(touchbit.TouchPad.a, 0)
    touchbit.setLight(touchbit.TouchPad.b, 0)
    touchbit.setLight(touchbit.TouchPad.c, 0)
    touchbit.setLight(touchbit.TouchPad.d, 0)
    touchbit.setLight(touchbit.TouchPad.right, 0)
})
touchbit.on(touchbit.TouchPad.left, touchbit.TouchEvent.released, function () {
    basic.showArrow(ArrowNames.West)
    touchbit.setLight(touchbit.TouchPad.left, 1)
})
touchbit.on(touchbit.TouchPad.d, touchbit.TouchEvent.released, function () {
    basic.showString("d")
    touchbit.setLight(touchbit.TouchPad.d, 1)
})
touchbit.on(touchbit.TouchPad.b, touchbit.TouchEvent.released, function () {
    basic.showString("b")
    touchbit.setLight(touchbit.TouchPad.b, 1)
})
touchbit.on(touchbit.TouchPad.a, touchbit.TouchEvent.released, function () {
    basic.showString("a")
    touchbit.setLight(touchbit.TouchPad.a, 1)
})
