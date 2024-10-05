// 인터페이스와 클래스

interface CharacterInterface {
  // 인터페이스의 필드값은 무조건 퍼블릭
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharacterInterface {
  // Character 클래스는 CharacterInterface 인터페이스를 구현한다

  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string
  ) {
    this.name = name;
    this.moveSpeed = moveSpeed;
  }
  move(): void {
    console.log(`${this.moveSpeed}속도로 이동!`);
  }
}
