FROM ubuntu:22.04

# Install tools
RUN apt update && apt install -y \
    openssh-server \
    coreutils \
    grep \
    findutils \
    && mkdir /var/run/sshd

# Generate SSH host keys
RUN ssh-keygen -A

# Create users
RUN useradd -m pemula0 \
 && useradd -m pemula1 \
 && useradd -m pemula2 \
 && useradd -m pemula3 \
 && useradd -m pemula4

# Set passwords
RUN echo "pemula0:pemula0" | chpasswd \
 && echo "pemula1:paswword" | chpasswd \
 && echo "pemula2:buhrebyc" | chpasswd \
 && echo "pemula3:ezbanget" | chpasswd \
 && echo "pemula4:entahlah" | chpasswd

# ---------- LEVEL 0 ----------
RUN echo "paswword" > /home/pemula0/.flag \
 && chown pemula0:pemula0 /home/pemula0/.flag \
 && chmod 400 /home/pemula0/.flag

# ---------- LEVEL 1 ----------
RUN echo "buhrebyc" > "/home/pemula1/flag with spaces.txt" \
 && chown pemula1:pemula1 "/home/pemula1/flag with spaces.txt" \
 && chmod 400 "/home/pemula1/flag with spaces.txt"

# ---------- LEVEL 2 ----------
RUN echo -n "ezbanget" | base64 > /home/pemula2/flag.txt \
 && chown pemula2:pemula2 /home/pemula2/flag.txt \
 && chmod 400 /home/pemula2/flag.txt

# ---------- LEVEL 3 ----------
RUN mkdir /home/pemula3/files \
 && for i in 1 2 3 4 5; do echo "nothing here" > /home/pemula3/files/file$i.txt; done \
 && echo "PASSWORD=entahlah" > /home/pemula3/files/important.txt \
 && chown -R pemula3:pemula3 /home/pemula3/files \
 && chmod 500 /home/pemula3/files \
 && chmod 400 /home/pemula3/files/*

# ---------- LEVEL 4 (FINAL) ----------
RUN mkdir /home/pemula4/mess \
 && for i in 1 2 3 4 5; do echo "nope" > /home/pemula4/mess/junk$i.txt; done \
 && echo "FLAG{selamat_pemula}" > /home/pemula4/mess/flag.txt \
 && chown -R pemula4:pemula4 /home/pemula4/mess \
 && chmod 500 /home/pemula4/mess \
 && chmod 400 /home/pemula4/mess/flag.txt

# SSH hardening
RUN sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin no/' /etc/ssh/sshd_config \
 && sed -i 's/#PasswordAuthentication yes/PasswordAuthentication yes/' /etc/ssh/sshd_config \
 && sed -i 's/#PermitEmptyPasswords no/PermitEmptyPasswords no/' /etc/ssh/sshd_config

EXPOSE 22
CMD ["/usr/sbin/sshd", "-D"]
