import * as tape from 'tape'
import Account from '../src/index'
const SecureTrie = require('merkle-patricia-tree/secure')

tape('empty constructor', function(tester) {
  const it = tester.test
  it('should work', function(t) {
    const account = new Account()
    t.equal(account.nonce.toString('hex'), '')
    t.equal(account.balance.toString('hex'), '')
    t.equal(
      account.stateRoot.toString('hex'),
      '56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
    )
    t.equal(
      account.codeHash.toString('hex'),
      'c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470',
    )
    t.end()
  })
})

tape('constructor with Array', function(tester) {
  const it = tester.test
  it('should work', function(t) {
    const raw = [
      '0x02', // nonce
      '0x0384', // balance
      '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421', // stateRoot
      '0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470', // codeHash
    ]
    const account = new Account(raw)
    t.equal(account.nonce.toString('hex'), '02')
    t.equal(account.balance.toString('hex'), '0384')
    t.equal(
      account.stateRoot.toString('hex'),
      '56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
    )
    t.equal(
      account.codeHash.toString('hex'),
      'c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470',
    )
    t.end()
  })
})

tape('constructor with Object', function(tester) {
  const it = tester.test
  it('should work', function(t) {
    const raw = {
      nonce: '0x02',
      balance: '0x0384',
      stateRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
      codeHash: '0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470',
    }
    const account = new Account(raw)
    t.equal(account.nonce.toString('hex'), '02')
    t.equal(account.balance.toString('hex'), '0384')
    t.equal(
      account.stateRoot.toString('hex'),
      '56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
    )
    t.equal(
      account.codeHash.toString('hex'),
      'c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470',
    )
    t.end()
  })
})

tape('constructor with RLP', function(tester) {
  const it = tester.test
  it('should work', function(t) {
    const account = new Account(
      'f84602820384a056e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421a0c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470',
    )
    t.equal(account.nonce.toString('hex'), '02')
    t.equal(account.balance.toString('hex'), '0384')
    t.equal(
      account.stateRoot.toString('hex'),
      '56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
    )
    t.equal(
      account.codeHash.toString('hex'),
      'c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470',
    )
    t.end()
  })
})

tape('serialize', function(tester) {
  const it = tester.test
  it('should work', function(t) {
    const account = new Account(
      'f84602820384a056e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421a0c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470',
    )
    t.equal(
      account.serialize().toString('hex'),
      'f84602820384a056e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421a0c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470',
    )
    t.end()
  })
})

tape('isContract', function(tester) {
  const it = tester.test
  it('should return false', function(t) {
    const account = new Account(
      'f84602820384a056e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421a0c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470',
    )
    t.equal(account.isContract(), false)
    t.end()
  })
  it('should return true', function(t) {
    const raw = {
      nonce: '0x01',
      balance: '0x0042',
      stateRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
      codeHash: '0xc5d2461236f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470',
    }
    const account = new Account(raw)
    t.equal(account.isContract(), true)
    t.end()
  })
})

tape('Code insertion and retrieval', function(tester) {
  const it = tester.test

  it('should setCode and getCode', function(t) {
    const code = Buffer.from('73095e7baea6a6c7c4c2dfeb977efac326af552d873173095e7baea6a6c7c4c2dfeb977efac326af552d873157', 'hex')
    
    const raw = {
      nonce: Buffer.from('0', 'hex'),
      balance: Buffer.from('03e7', 'hex'),
      stateRoot: Buffer.from('56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421', 'hex'),
      codeHash: Buffer.from('b30fb32201fe0486606ad451e1a61e2ae1748343cd3d411ed992ffcc0774edd4', 'hex')
    }
    const account = new Account(raw)
    const trie = new SecureTrie()

    account.setCode(trie, code, function (err, codeHash) {
      t.equal(codeHash.toString('hex'), raw.codeHash.toString('hex'))
      account.getCode(trie, function (err, c) {
        t.equal(c, code)
      })
    })
    t.end()
  })
})
