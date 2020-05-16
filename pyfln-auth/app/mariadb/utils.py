from urlparse import parse_qs

def parse_qs_params(query_string):
    q_params = dict(parse_qs(query_string))
    q_params = {k: v[0] for k,v in q_params.items()}
    return q_params