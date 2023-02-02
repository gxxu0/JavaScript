class LifeCycle {
  call() {
    this.a();
    this.b();
    this.c();
  }
  a() {
    console.log("a() 메소드를 호출");
  }
  b() {
    console.log("b() 메소드를 호출");
  }
  c() {
    console.log("c() 메소드를 호출");
  }
}
class Child extends LifeCycle {
  a() {
    super.a();
    console.log("자식의 a() 메소드입니다.");
  }
}
new Child().call();
