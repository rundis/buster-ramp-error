buster-ramp-error
=================

Sample vagrant box for reproducing buster (0.7.6 Beta 5)  bug 375


=== Preconditions
- Vagrant
- VirtualBox
- Ansible

=== Reproduce error
1. `vagrant up` - May take a while...
2. `vagrant ssh`
3. `cd /vagrant/sample`
4. `buster-test`
