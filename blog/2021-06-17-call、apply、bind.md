---
id: call-apply-bind
title: call、apply和bind
author: 
author_title: 
author_url: 
author_image_url: 
tags: [ call, apply, bind, 面试 ]
---


#### call、apply和bind的区别

 > `call`跟`apply`的用法几乎一样，唯一的不同就是传递的参数不同，`call`只能一个参数一个参数的传入。
 >
 > `apply`则只支持传入一个数组，哪怕是一个参数也要是数组形式。最终调用函数时候这个数组会拆成一个个参数分别传入。
 >
 > 至于`bind`方法，他是直接改变这个函数的`this`指向并且返回一个新的函数，之后再次调用这个函数的时候`this`都是指向`bind`绑定的第一个参数。`bind`传餐方式跟`call`方法一致。


<!--truncate-->



#### 代码示例

  ```js
  // 有只猫叫小黑，小黑会吃鱼
  const cat = {
      name: '小黑',
      eatFish(...args) {
          console.log('this指向=>', this);
          console.log('...args', args);
          console.log(this.name + '吃鱼');
      },
  }
  // 有只狗叫大毛，大毛会吃骨头
  const dog = {
      name: '大毛',
      eatBone(...args) {
          console.log('this指向=>', this);
          console.log('...args', args);
          console.log(this.name + '吃骨头');
      },
  }
  
  console.log('=================== call =========================');
  // 有一天大毛想吃鱼了，可是它不知道怎么吃。怎么办？小黑说我吃的时候喂你吃
  cat.eatFish.call(dog, '汪汪汪', 'call')
  // 大毛为了表示感谢，决定下次吃骨头的时候也喂小黑吃
  dog.eatBone.call(cat, '喵喵喵', 'call')
  
  console.log('=================== apply =========================');
  cat.eatFish.apply(dog, ['汪汪汪', 'apply'])
  dog.eatBone.apply(cat, ['喵喵喵', 'apply'])
  
  console.log('=================== bind =========================');
  // 有一天他们觉得每次吃的时候再喂太麻烦了。干脆直接教对方怎么吃
  const test1 = cat.eatFish.bind(dog, '汪汪汪', 'bind')
  const test2 = dog.eatBone.bind(cat, '喵喵喵', 'bind')
  test1()
  test2()
  ```

#### 总结

 1. 当我们使用一个函数需要改变`this`指向的时候才会用到`call` `apply`  `bind`
 2. 如果你要传递的参数不多，则可以使用`fn.call(thisObj, arg1, arg2 ...)`
 3. 如果你要传递的参数很多，则可以用数组将参数整理好调用`fn.apply(thisObj, [arg1, arg2 ...])`
 4. 如果你想生成一个新的函数长期绑定某个函数给某个对象使用，则可以使用`const newFn = fn.bind(thisObj); newFn(arg1, arg2...)`
  
#### 使用小技巧

  ```js
  // 如果一个数组我们已知里面全都是数字，想要知道最大的那个数，由于Array没有max方法，Math对象上有
  // 我们可以根据apply传递参数的特性将这个数组当成参数传入
  // 最终Math.max函数调用的时候会将apply的数组里面的参数一个一个传入，恰好符合Math.max的参数传递方式
  // 这样变相的实现了数组的max方法。min方法也同理
  const arr = [1,2,3,4,5,6]
  const max = Math.max.apply(null, arr)
  console.log(max)    // 6
  
  // 如果你想将某个函数绑定新的`this`指向并且固定先传入几个变量可以在绑定的时候就传入，之后调用新函数传入的参数都会排在之后
  const obj = {}
  function test(...args) {console.log(args)}
  const newFn = test.bind(obj, '静态参数1', '静态参数2')
  newFn('动态参数3', '动态参数4')
  ```

#### `bind`、`call`、`apply`的实现

  ```js
  //myBind
  Function.prototype.myBind = function() {
      var _this = this;
      var context = [].shift.call(arguments);// 保存需要绑定的this上下文
      var args = [].slice.call(arguments); //剩下参数转为数组
      console.log(_this, context, args);
      return function() {
          return _this.apply(context, [].concat.call(args, [].slice.call(arguments)));
      }
  };
  
  /**
   * myCall
   * 每个函数都可以调用call方法，来改变当前这个函数执行的this关键字，并且支持传入参数
   */
  Function.prototype.myCall = function(context) {
      //第一个参数为调用call方法的函数中的this指向
      var context = context || global;
      //将this赋给context的fn属性
      context.fn = this;//此处this是指调用myCall的function
  
      var arr = [];
      for (var i=0,len=arguments.length;i<len;i++) {
          arr.push("arguments[" + i + "]");
      }
      //执行这个函数，并返回结果
      var result = eval("context.fn(" + arr.toString() + ")");
      //将this指向销毁
      delete context.fn;
      return result;
  };
  /**
   * myApply
   * apply函数传入的是this指向和参数数组
   */
  Function.prototype.myApply = function(context, arr) {
      var context = context || global;
      context.fn = this;
      var result;
      if (!arr) {
          result = context.fn(); //直接执行
      } else {
          var args = [];
          for (var i=0,len=arr.length;i<len;i++) {
              args.push("arr[" + i + "]");
          }
          result = eval("context.fn([" + args.toString() + "])");
      }
      //将this指向销毁
      delete context.fn;
      return result;
  }
  ```

  
