package com.productmanagement.backend.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;

@Service
public class JwtService {

    private static final String SECRET =
            "ProductManagementSystemSecretJwtKey2026SuperSecureBackendSecret123456789";

    private final SecretKey key =
            Keys.hmacShaKeyFor(SECRET.getBytes());

    private final long EXPIRATION =
            1000 * 60 * 60 * 24;

    public String generateToken(String username){

        return Jwts.builder()

                .subject(username)

                .issuedAt(new Date())

                .expiration(new Date(System.currentTimeMillis() + EXPIRATION))

                .signWith(key, SignatureAlgorithm.HS256)

                .compact();

    }

    public String extractUsername(String token){

        return getClaims(token).getSubject();

    }

    public boolean isTokenValid(String token){

        return !getClaims(token)

                .getExpiration()

                .before(new Date());

    }

    private Claims getClaims(String token){

        return Jwts.parser()

                .verifyWith(key)

                .build()

                .parseSignedClaims(token)

                .getPayload();

    }

}