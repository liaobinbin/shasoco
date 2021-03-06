var assert = require('assert');
var sinon = require('sinon');
var ps = require('../lib/command/ps');

describe('Ps', function() {

    describe('#register()', function() {
        it('should register the "ps" command', function() {
            var command = sinon.spy();
            ps.register({ command: command });
            assert(command.calledWith('ps'));
        });
    });

    describe('#action()', function() {
        it('should log running deploys', function() {
            ps.mods.console = { log: sinon.spy() };
            var list = function() {
                return [{ id: 'a', ports: "22,80,443", version: 'b', status: 'UP' }];
            };
            ps.mods.deploys = {
                list: list
            };
            ps.action();
            assert.equal(2, ps.mods.console.log.getCalls().length);
            var l0 = ps.mods.console.log.args[0][0];
            var l1 = ps.mods.console.log.args[1][0];
            assert(l0.match(/ *ID *PORTS *VERSION *STATUS/));
            assert(l1.match(/ *a *22,80,443 *b *UP/));
        });
    });
});

