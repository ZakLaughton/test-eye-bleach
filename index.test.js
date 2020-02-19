describe('really difficult tests', () => {
  it('passes', () => {
    expect(true).toBeTruthy();
  });
  it('also passes', () => {
    expect(1 + 1).toEqual(2);
  });
});
describe('super duper tricky tests', () => {
  it('passes', () => {
    expect("I'm awesome").toBeTruthy();
  });
  it('also passes', () => {
    expect(false).toBeFalsy();
  });
  describe('subset of super duper tricky tests', () => {
    it('passes', () => {
      expect("I'm awesome").toBeTruthy();
    });
    it('also passes', () => {
      expect(false).toBeFalsy();
    });
  });
});
describe('you must be really awesome if these actually pass', () => {
  it('some reaaallly complicated stuff', () => {
    expect(true);
  });
  it('some reaaallly complicated stuff', () => {
    expect(true);
  });
  it('some reaaallly complicated stuff', () => {
    expect(true);
  });
  it('some reaaallly complicated stuff', () => {
    expect(true);
  });
  it('some reaaallly complicated stuff', () => {
    expect(true);
  });
  it('some reaaallly complicated stuff', () => {
    expect(true);
  });
  it('some reaaallly complicated stuff', () => {
    expect(true);
  });
  it('some reaaallly complicated stuff', () => {
    expect(true);
  });
  it('some reaaallly complicated stuff', () => {
    expect(true);
  });
});

describe(`who's awesome?`, () => {
  it('you are', () => {
    expect('You kick ass').toBeTruthy;
  });
  it('YOU are', () => {
    expect('You are so beautiful to me').toBeTruthy;
  });
  it('YOU are', () => {
    expect('Your body is a wonderland').toBeTruthy;
  });
  it('srsly, YOU', () => {
    expect("Wow, you're so eloquent!").toBeTruthy;
  });
});

describe(`let's do that all one more time for fun`, () => {
  describe('really difficult tests', () => {
    it('passes', () => {
      expect(true).toBeTruthy();
    });
    it('also passes', () => {
      expect(1 + 1).toEqual(2);
    });
  });
  describe('super duper tricky tests', () => {
    it('passes', () => {
      expect("I'm awesome").toBeTruthy();
    });
    it('also passes', () => {
      expect(false).toBeFalsy();
    });
    describe('subset of super duper tricky tests', () => {
      it('passes', () => {
        expect("I'm awesome").toBeTruthy();
      });
      it('also passes', () => {
        expect(false).toBeFalsy();
      });
    });
  });
  describe('you must be really awesome if these actually pass', () => {
    it('some reaaallly complicated stuff', () => {
      expect(true);
    });
    it('some reaaallly complicated stuff', () => {
      expect(true);
    });
    it('some reaaallly complicated stuff', () => {
      expect(true);
    });
    it('some reaaallly complicated stuff', () => {
      expect(true);
    });
    it('some reaaallly complicated stuff', () => {
      expect(true);
    });
    it('some reaaallly complicated stuff', () => {
      expect(true);
    });
    it('some reaaallly complicated stuff', () => {
      expect(true);
    });
    it('some reaaallly complicated stuff', () => {
      expect(true);
    });
    it('some reaaallly complicated stuff', () => {
      expect(true);
    });
  });

  describe(`who's awesome?`, () => {
    it('you are', () => {
      expect('You kick ass').toBeTruthy;
    });
    it('YOU are', () => {
      expect('You are so beautiful to me').toBeTruthy;
    });
    it('YOU are', () => {
      expect('Your body is a wonderland').toBeTruthy;
    });
    it('srsly, YOU', () => {
      expect("Wow, you're so eloquent!").toBeTruthy;
    });
  });
});
