from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from django.shortcuts import render
from .models import Filmes
from .serializer import FilmesSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view


@api_view(['GET', 'POST'])
def listar_filmes(request):
    if request.method == 'GET':
        queryset = Filmes.objects.all()
        serializer = FilmesSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = FilmesSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else: 
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class FilmesViews(ListCreateAPIView):
    queryset = Filmes.objects.all()
    serializer_class = FilmesSerializer
    
class FilmesDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Filmes.objects.all()
    serializer_class = FilmesSerializer

